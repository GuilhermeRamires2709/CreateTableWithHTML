import { LightningElement, wire, api, track } from 'lwc';
import getEletricCarStation from '@salesforce/apex/CNT_CaseEletricCarControllerLtngBR.getEletricCarStation';
import createNewEletricCarStation from '@salesforce/apex/CNT_CaseEletricCarControllerLtngBR.createEletricCarStation';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ELETRIC_CAR_STATION_OBJECT from "@salesforce/schema/eletricVehicleStation__c";
import LOCAL_ACCESS_TYPE_FIELD from '@salesforce/schema/eletricVehicleStation__c.localAcessType__c';
import SUPPORTED_POWER_TYPES_FIELD from '@salesforce/schema/eletricVehicleStation__c.supportedPowerTypes__c';

const FIELDS = [
    'Case.Id'
]

export default class CNT_CaseEletricCarStation extends LightningElement {
    @api recordId;// = '5001w000008ArF9AAK';
    @track eletricCarStation = {};
    @track theRecord = {};
    @track disableButtonStation = true;
    @track expansibleSectionCss = 'slds-section slds-is-open'; //this starts as section open

    @track selectedValue;
    @track options = [];

    showlinkDetails = false;//show button link 'Ver detalhes'
    showDetails = false;///show details of station

    caseId = '';
    defaultError = false;
    errorMessage = '';
    errorTitle = '';
    clickedButtonLabel = 'Ingressar estação';
    spinner = true;
    showFieldsInsertEletricCarStation = false;

    @track recordTypeId;
    @track pickListvaluesLocalAccessType;
    @track pickListvaluesSupportedPowerTypes;

    hasEletricCarId = false;
    hasRecordTypeId = false;
    defaultRecordTypeId;

    

    @wire(getObjectInfo, { objectApiName: ELETRIC_CAR_STATION_OBJECT })
    eletricObjectInfo({data, error}) {
        if(data) {
            // console.log(` data `, data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
            //console.log(` hasRecordTypeId `, this.hasRecordTypeId);
            // Check if we need to override record type with default
            if (this.hasRecordTypeId === false) {
                this.recordTypeId = this.defaultRecordTypeId;
                //console.log(` RecordTypeId `, this.recordTypeId);
            }

            let optionsValues = [];
            // map of record type Info
            const rtInfos = data.recordTypeInfos;

            // getting map values
            let rtValues = Object.values(rtInfos);

            for(let i = 0; i < rtValues.length; i++) {
                if(rtValues[i].name !== 'Master') {
                    optionsValues.push({
                        label: rtValues[i].name,
                        value: rtValues[i].recordTypeId
                    })
                }
            }
            //console.log(` optionsValues `, optionsValues);
            this.options = optionsValues;

        }
        else if(error) {
            window.console.log('Error ===> '+JSON.stringify(error));
        }
    }

    @wire(getPicklistValues, { recordTypeId : '$recordTypeId', fieldApiName : LOCAL_ACCESS_TYPE_FIELD })
    wiredLocalAccessPickListValue({ data, error }){
        if(data){
            // console.log(` LOCAL_ACCESS_TYPE_FIELD Picklist values are `, data.values);
            this.pickListvaluesLocalAccessType = data.values;
            this.error = undefined;
        }
        if(error){
            //console.log(` Error while fetching Picklist values  ${error}`);
            this.error = error;
            this.pickListvaluesLocalAccessType = undefined;
        }
    }

    @wire(getPicklistValues, { recordTypeId : '$recordTypeId', fieldApiName : SUPPORTED_POWER_TYPES_FIELD })
    wiredSupportPowerPickListValue({ data, error }){
        if(data){
            // console.log(` SUPPORTED_POWER_TYPES_FIELD Picklist values are `, data.values);
            this.pickListvaluesSupportedPowerTypes = data.values;
            this.error = undefined;
        }
        if(error){
            //console.log(` Error while fetching Picklist values  ${error}`);
            this.error = error;
            this.pickListvaluesSupportedPowerTypes = undefined;
        }
    }

    @wire (getRecord, { recordId: '$recordId', fields: FIELDS })
    async wiredRecord({ error, data }) {
        if (error) {
            this.defaultError = true;
            this.errorMessage = 'Falha na Comunicação';
            this.errorTitle = 'Não foi possível encontrar o ...';
            this.spinner = false;
        } else if (data) {
            this.caseId = data.fields.Id.value;
            await this.init();
        }
    }

    init() {
        this.spinner = true;
        getEletricCarStation({
            caseId: this.caseId
        })                
        .then(result => {
            this.eletricCarStation = result;
            // console.log('this.eletricCarStation');
            // console.log(JSON.stringify(this.eletricCarStation));

            this.spinner = false;
            if(!this.eletricCarStation.pointOfDeliveryExists){
                this.defaultError = true;
                this.errorMessage = 'Ponto de fornecimento';
                this.errorTitle = 'Não foi possível encontrar o ...';
            }
            if(this.eletricCarStation.id!=null){
                this.hasEletricCarId = true;
                this.validateButton(true);
            } else {
                this.hasEletricCarId = false;
                this.validateButton(false); 
            }
        })
        .catch(error => {
            //console.log(error);
            
            this.spinner = false;
            this.defaultError = true;
            this.errorTitle = 'Falha na Comunicação';
            this.errorMessage = 'Não foi possivel consultar informações.';
            
        })
    }

    handleClick(event){
        // console.log('handleClick');
        // console.log(event.target.label);
        let label = event.target.label;
        let removeStation = false;
        if (label === 'Ingressar estação'){
            this.showFieldsInsertEletricCarStation = this.showFieldsInsertEletricCarStation && !this.showDetails ? false : true;    
        } else if (label === 'Desingressar estação'){
            removeStation = true;
            this.checkEletricCarStation(removeStation);
            this.handleMsgDesvincular();
        }
        else if (label === 'Salvar'){
            if(this.isInputValid()) {
                this.checkEletricCarStation(removeStation);
                this.handleMsgDesvincular();
            }
            else{
                this.handleToast('Error!', 'Preencher os campos obrigatórios para o cadastro de uma Estação de Veiculo Elétrico.', 'error');
            }
        }
    }

    validateButton(hasStation){
        if (hasStation){
            this.showFieldsInsertEletricCarStation = hasStation && this.hasEletricCarId ? false : true;
            this.disableButtonStation = hasStation && this.hasEletricCarId ? true : false;
            this.showlinkDetails = true;
            this.clickedButtonLabel = 'Desingressar estação';
        } else if (!hasStation){
            this.disableButtonStation = !hasStation && !this.hasEletricCarId ? false : true;
            this.showlinkDetails = false;
            this.clickedButtonLabel = 'Ingressar estação';
            this.handleMsgDesvincular();
        }
    }

    handleMsgDesvincular(){
        this.errorTitle = 'Desvinculada com sucesso';
        this.defaultError = false;
        this.showFieldsInsertEletricCarStation = false;
        this.clearInputs();
        //console.log('handleMsgDesvincular');
    }

    handleClickDetail(event){
        let label = event.target.label;        
        if(this.showDetails){
            this.showDetails = false;
            this.showFieldsInsertEletricCarStation = false;
            this.disableButtonStation = this.clickedButtonLabel == 'Desingressar estação' && !this.showDetails && this.hasEletricCarId ? true : false;
        } else { 
            this.showDetails = true;
            this.showFieldsInsertEletricCarStation = true;
            this.disableButtonStation = this.clickedButtonLabel == 'Desingressar estação' && this.showDetails && this.hasEletricCarId ? false : true;
        }
    }

    clearInputs(){
        this.template.querySelectorAll('.clear').forEach(el => el.value = '');
    }

    checkEletricCarStation(removeStation){
 
        //let recordTypeInput = this.template.querySelector('.recordType');
        let localAcessTypeInput = this.template.querySelector('.localAcessType');
        let installedPowerStationKwInput = this.template.querySelector('.installedPowerStationKw');
        let numeroEstacoesInstaladasInput = this.template.querySelector('.numeroEstacoesInstaladas');
        let numberOfRechargePointsAtTheStationInput = this.template.querySelector('.numberOfRechargePointsAtTheStation');
        //let numberRechargePointsInput = this.template.querySelector('.numberRechargePoints');
        let supportedPowerTypesInput = this.template.querySelector('.supportedPowerTypes');
        let installationDatePRVEInput = this.template.querySelector('.installationDatePRVE');
        let pointOfDeliveryInput = this.template.querySelector('.pointOfDelivery');
        let idInput = this.template.querySelector('.id');

        let eletricCarStation = new Object();

        //eletricCarStation.recordType = recordTypeInput.value;
        eletricCarStation.localAcessType = localAcessTypeInput.value;
        eletricCarStation.installedPowerStationKw = installedPowerStationKwInput.value;
        eletricCarStation.numeroEstacoesInstaladas = numeroEstacoesInstaladasInput.value;
        eletricCarStation.numberOfRechargePointsAtTheStation = numberOfRechargePointsAtTheStationInput.value;
        //eletricCarStation.numberRechargePoints = numberRechargePointsInput.value;
        eletricCarStation.supportedPowerTypes = supportedPowerTypesInput.value;
        eletricCarStation.installationDatePRVE = installationDatePRVEInput.value;
        eletricCarStation.pointOfDelivery = pointOfDeliveryInput.value;
        eletricCarStation.id = idInput != null ? idInput.value: '';
        eletricCarStation.removeEletricCarStation = removeStation;

        this.saveEletricCarStation(eletricCarStation);
    }

    saveEletricCarStation(eletricCarStation){
       
        this.spinner = true;

        createNewEletricCarStation( { serializeEletricCarStation : JSON.stringify(eletricCarStation) } )
            .then(result => {
                // console.log('result: ');
                // console.log(JSON.stringify(result));
                this.spinner = false;

                if(result != null){
                    this.init();
                    this.handleToast('Success!','Your eletric car station has been submitted','success');
                } else {
                    this.error = true;
                }
            })
            .catch(error => {
                this.spinner = false;
                this.handleToast('Error!', error.body.message, 'error');
                this.error = error;
            });
    }

    handleChange(event) {
        this.value = event.detail.value;
        //console.log(this.value);
    }

    handleChangeRT(event) {
        this.selectedValue = event.detail.value;
    }

    isInputValid() {
        let isValid = true;
        let inputFields = this.template.querySelectorAll('.clear');
        inputFields.forEach(inputField => {
            
            if(!inputField.checkValidity()) {
                isValid = false;
            }
        });
        return isValid;
    }

    handleToast(title, msg, variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: msg,
                variant: variant,
            }),
        );
    }

    handleExpansibleSection(){
        if(this.expansibleSectionCss.includes('slds-is-open')){ // if section is open
          this.expansibleSectionCss = 'slds-section'; //set class to close 
        }else{
          this.expansibleSectionCss = 'slds-section slds-is-open'; //set class to be open
        }
    }
}