import { LightningElement, track  } from 'lwc';
import pdflib from "@salesforce/resourceUrl/pdflib";
//import {PDFDocument, rgb} from "@salesforce/resourceUrl/pdflib";
import { loadScript } from "lightning/platformResourceLoader";
import Logo_Enel_LGPD from "@salesforce/resourceUrl/Logo_Enel_LGPD";
import UserPreferencesNewLightningReportRunPageEnabled from '@salesforce/schema/User.UserPreferencesNewLightningReportRunPageEnabled';

export default class LgpdReport extends LightningElement {
    //Dados do Contrato
    nameClient = false;
    addressClient = false;
    identificationNumber = false;
    docType = false;
    docNumber = false;
    motherName = false;
    bornDate = false;
    attorney = false;
    attorneyCpf = false;
    partnerName = false;
    partnerCpf = false;
    spouseName = false;
    spouseCpf = false;
    //Dados do Imóvel
    clientNumber = false;
    refPoint = false;
    postCode = false;
    clientType = false;
    cnae = false;
    //Dados de contato
    phone1 = false;
    phone2 = false;
    phone3 = false;
    phone4 = false;
    phone5 = false;
    accessMail = false;
    alternativeMail = false;
    //Dados Bancários
    bank = false;
    agency = false;
    account = false;
    //Dados de endereço de cobrança
    postCodeCharge = false;
    publicPlace = false;
    addressNumber = false;
    addressDetails = false;
    district = false;
    state = false;
    city = false;
    //Dados Conta por e-mail
    dataForMail = false;
    //Dados Benefício Social
    essentialService = false;
    beneficiaryData = false;
    nis = false;
    rani = false;
    familyIncome = false;
    breed= false;
    residentsNumber = false;
    //Dados Cliente Vital 
    medicalCertificate=false;
    //SendForm
    downloadterm = false;
    sendMail=false;
    //Mostrar/Ocultar Dados do Imóvel  
    @track clickedButtonContractData = 'Hide';
    @track boolVisibleContractData = true;  
    //Mostrar/Ocultar Dados do Imóvel   
    @track clickButtonPropertyData = 'Hide';
    @track boolVisiblePropertyData = true;
    //Mostrar/Ocultar Dados de contato
    @track clickedButtonContactData = 'Hide';
    @track boolVisibleContactData = true;  
    //Mostrar/Ocultar Dados Bancarios
    @track clickedButtonBankData = 'Hide';
    @track boolVisibleBankData = true;  
    //Mostrar/Ocultar Dados de cobrança
    @track clickedBillingAddressData = 'Hide';
    @track boolVisibleBillingAdress = true; 
    //Mostrar/Ocultar Dados Cliente Vital
    @track clickedClientData = 'Hide';
    @track boolVisibleClientData = true;  
    //Mostrar/Ocultar Dados conta por e-mail
    @track clickedMailAccountData = 'Hide';
    @track boolVisibleMailAccountData = true;  
    //Mostrar/Ocultar Dados Benefício Social
    @track clickedSocialBenefitData = 'Hide';
    @track boolVisibleSocialBenefitData = true;  

    setnameClient(){
        this.nameClient    = !this.nameClient ? true : false;
    }    
    setaddressClient(){
        this.addressClient = !this.addressClient ? true : false;
    }
    setidentificationNumber(){
        this.identificationNumber = !this.identificationNumber ? true : false;
    }
    setdocType(){
        this.docType = !this.docType ? true : false;
    }
    setdocNumber(){
        this.docNumber = !this.docNumber ? true : false;
    }
    setmotherName(){
        this.motherName = !this.motherName ? true : false;
    }
    setbornDate(){
        this.bornDate = !this.bornDate ? true : false;
    }
    setattorney(){
        this.attorney = !this.attorney ? true : false;
    }
    setattorneyCpf(){
        this.attorneyCpf = !this.attorneyCpf ? true : false;
    }
    setpartnerName(){
        this.partnerName = !this.partnerName ? true : false;
    }
    setpartnerCpf(){
        this.partnerCpf = !this.partnerCpf ? true : false;
    }
    setspouseName(){
        this.spouseName = !this.spouseName ? true : false;   
    }
    setspouseCpf(){
        this.spouseCpf = !this.spouseCpf ? true : false;
    }

    setclientNumber(){
        this.clientNumber = !this.clientNumber ? true : false;        
    }
    setrefPoint(){
        this.refPoint = !this.refPoint ? true : false;
    }
    setpostCode(){
        this.postCode = !this.postCode ? true : false;
    }
    setclientType(){
        this.clientType = !this.clientType ? true : false;
    }
    setcnae(){
        this.cnae = !this.cnae ? true : false;
    }
    setruralInscription(){
        this.ruralInscription = !this.ruralInscription ? true : false;
    }
    setphone1(){
        this.phone1 = !this.phone1 ? true : false;
    }
    setphone2(){
        this.phone2 = !this.phone2 ? true : false;
    }
    setphone3(){
        this.phone3 = !this.phone3 ? true : false;
    }
    setphone4(){
        this.phone4 = !this.phone4 ? true : false;
    }
    setphone5(){
        this.phone5 = !this.phone5 ? true : false;
    }
    setaccessMail(){
        this.accessMail = !this.accessMail ? true : false;
    }
    setalternativeMail(){
        this.alternativeMail = !this.alternativeMail ? true: false;
    }
    setbank(){
        this.bank = !this.bank ? true:false;
    }
    setagency(){
        this.agency = !this.agency ? true : false;
    }
    setaccount(){
        this.account = !this.account ? true : false;
    }
    setpostCodeCharge(){
        this.postCodeCharge = !this.postCodeCharge ? true:false;
    }
    setpublicPlace(){
        this.publicPlace = !this.publicPlace ? true:false;
    }
    setaddressNumber(){
        this.addressNumber = !this.addressNumber ? true:false;
    }
    setaddressDetails(){
        this.addressDetails = !this.addressDetails ? true:false;
    }
    setdistrict(){
        this.district = !this.district ? true:false;        
    }
    setstate(){
        this.state = !this.state ? true:false;
    }
    setcity(){
        this.city = !this.city ?true:false;
    }
    setdataForMail(){
        this.dataForMail = !this.dataForMail ? true:false;
    }
    setessentialService(){
        this.essentialService = !this.essentialService ? true:false;
    }
    setbeneficiaryData(){
        this.beneficiaryData= !this.beneficiaryData ? true : false;
    }
    setnis(){
        this.nis = !this.nis ? true:false;
    }
    setrani(){
        this.rani = !this.rani ? true : false;
    }
    setfamilyIncome(){
        this.familyIncome = !this.familyIncome ? true:false;
    }
    setbreed(){
        this.breed = !this.breed ? true:false;
    }
    setresidentsNumber(){
        this.residentsNumber = !this.residentsNumber ? true:false;
    }
    setmedicalCertificate(){
        this.medicalCertificate = !this.medicalCertificate ? true:false;
    }
    setdownloadterm(){
        this.downloadterm = !this.downloadterm ? true:false;
    }
    setsendMail(){
        this.sendMail=!this.sendMail ? true:false;
    }
    // Métodos Select All
    selectAllContractData(event) {
        const contractList = this.template.querySelectorAll('[name="ContractData"]');
        for (const contractElement of contractList) {
            contractElement.checked = event.target.checked;
        }
    }
    selectAllFields(event) {
        const allList = this.template.querySelectorAll('[data-id="selectAll"]');
        for (const allElement of allList) {
            allElement.checked = event.target.checked;
        }
    }
    selectAllPropertyData(event){
        const propertyList =this.template.querySelectorAll('[name="propertyData"]');
        for (const propertyElement of propertyList) {
            propertyElement.checked = event.target.checked;
        }
    }
    selectAllContactData(event){
        const contractList =this.template.querySelectorAll('[name="contactData"]');
        for (const contractElement of contractList) {
            contractElement.checked = event.target.checked;
        }
    }
    selectAllBankData(event){
        const bankList = this.template.querySelectorAll('[name="bankData"]');
        for(const bankElement of bankList){
            bankElement.checked = event.target.checked;
        }
    }
    selectAllBillingAddress(event){
        const billingAddressList = this.template.querySelectorAll('[name="billingAddressData"]');
        for(const billingAddressElement of billingAddressList){
            billingAddressElement.checked = event.target.checked;
        }  
    }
    selectSocialBenefit(event){
        const socialBenefitList = this.template.querySelectorAll('[name="socialBenefitData"]');
        for(const socialBenefitElement of socialBenefitList){
            socialBenefitElement.checked = event.target.checked;
        }
    }  
    clickshowContractData(event) {
        const label = event.target.label;  
        if ( label === 'Show' ) {

            this.clickedButtonContractData = 'Hide';
            this.boolVisibleContractData = true;  

        } else if  ( label === 'Hide' ) {
            
            this.clickedButtonContractData = 'Show';
            this.boolVisibleContractData = false;  

        }  
    }
    clickedShowPropertyData(event) {
        const label = event.target.label;  
        if ( label === 'Show' ) {

            this.clickButtonPropertyData = 'Hide';
            this.boolVisiblePropertyData = true;  

        } else if  ( label === 'Hide' ) {
            
            this.clickButtonPropertyData = 'Show';
            this.boolVisiblePropertyData = false;  

        }  
    }
    clickshowContactData(event) {
        const label = event.target.label;  
        if ( label === 'Show' ) {

            this.clickedButtonContactData = 'Hide';
            this.boolVisibleContactData = true;  

        } else if  ( label === 'Hide' ) {
            
            this.clickedButtonContactData = 'Show';
            this.boolVisibleContactData = false;  

        }  
    }  
    clickShowBankData(event) {
        const label = event.target.label;  
        if ( label === 'Show' ) {

            this.clickedButtonBankData = 'Hide';
            this.boolVisibleBankData = true;  

        } else if  ( label === 'Hide' ) {
            
            this.clickedButtonBankData = 'Show';
            this.boolVisibleBankData = false;  

        }  
    }  
    clickShowBillingData(event) {
        const label = event.target.label;  
        if ( label === 'Show' ) {

            this.clickedBillingAddressData = 'Hide';
            this.boolVisibleBillingAdress = true;  

        } else if  ( label === 'Hide' ) {
            
            this.clickedBillingAddressData = 'Show';
            this.boolVisibleBillingAdress = false;  

        }  
    }
    clickShowClientData(event) {
        const label = event.target.label;  
        if ( label === 'Show' ) {

            this.clickedClientData = 'Hide';
            this.boolVisibleClientData = true;  

        } else if  ( label === 'Hide' ) {
            
            this.clickedClientData = 'Show';
            this.boolVisibleClientData = false;  

        }  
    }
    clickShowMailAccountData(event) {
        const label = event.target.label;  
        if ( label === 'Show' ) {

            this.clickedMailAccountData = 'Hide';
            this.boolVisibleMailAccountData = true;  

        } else if  ( label === 'Hide' ) {
            
            this.clickedMailAccountData = 'Show';
            this.boolVisibleMailAccountData = false;  

        }  
    }  
    clickShowSocialBenefit(event) {
        const label = event.target.label;  
        if ( label === 'Show' ) {

            this.clickedSocialBenefitData = 'Hide';
            this.boolVisibleSocialBenefitData = true;  

        } else if  ( label === 'Hide' ) {
            
            this.clickedSocialBenefitData = 'Show';
            this.boolVisibleSocialBenefitData = false;  

        }  
    }
    printer(){
        this.createPdf();
    }
    renderedCallback() {
        loadScript(this, pdflib).then(() => {});
    }
    async createPdf() {
        const pdfDoc = await PDFLib.PDFDocument.create();
        const timesRomanFont = await pdfDoc.embedFont(
            PDFLib.StandardFonts.TimesRoman
        );
        const timesRomanBoldFont = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRomanBold);

        const page1 = pdfDoc.addPage();
        const page2= pdfDoc.addPage();
        const page3 = pdfDoc.addPage();
        const page4 = pdfDoc.addPage();
        const page5 = pdfDoc.addPage();
        const { width, height } = page1.getSize();
        const fontSize = 10;
        const fontSizeTable = 6;
        const fontSizeTitle = 20;
        const lineSpace=30;
        const borderSize= 0.2;
        let qtdlin = 0;
        const emblemUrl = Logo_Enel_LGPD;
        const emblemImageBytes = await fetch(emblemUrl).then(res => res.arrayBuffer())
        const emblemImage = await pdfDoc.embedPng(emblemImageBytes)
        const pngDims = emblemImage.scale(0.5);

        page1.drawImage(emblemImage, {
            x: 90,
            y: 750,
            width: 114,
            height: 38,
        });
        qtdlin++;
        page1.drawText('Relatório de dados pessoais' , { x: 210, y: (690-lineSpace*qtdlin), size: fontSizeTitle, font: timesRomanBoldFont });
        qtdlin++;
        qtdlin++;   
        page1.drawText('NOME COMPLETO DO CLIENTE' , { x: 90, y: (690-lineSpace*qtdlin), size: fontSize, font: timesRomanBoldFont });
        qtdlin++;
        page1.drawText('ENDEREÇO COMPLETO DO CLIENTE' , { x: 90, y: (690-lineSpace*qtdlin), size: fontSize, font: timesRomanBoldFont });
        qtdlin++;
        page1.drawText('NÚMERO DA INSTALAÇÃO' , { x: 90, y: (690-lineSpace*qtdlin), size: fontSize, font: timesRomanBoldFont });
        qtdlin++;
        page1.drawText('ASSUNTO: SOLICITAÇÃO - RELATÓRIO DE DADOS (CONSULTA) DE EXERCÍCIOS DE DIREITO' , { x: 90, y: (690-lineSpace*qtdlin), size: fontSize, font: timesRomanBoldFont });
        qtdlin++;
        qtdlin++;
        page1.drawText('Sr. (a) NOME COMPLETO DO CLIENTE' , { x: 90, y: (690-lineSpace*qtdlin), size: fontSize, font: timesRomanBoldFont });
        qtdlin++;
        qtdlin++;
        page1.drawText(
            [
                '   Em resposta a manifestação referente a solicitação de relatório de dados, e em'
                ,'atendimento a Lei Geral de Proteção de Dados, n° 13.709 que dispõe sobre o tratamento de'
                ,'dados pessoais e regulamenta que o titular dos dados pessoais tem direito a obter do'
                ,'controlador (distribuidora), em relação aos dados do titular por ele tratados, a qualquer'
                ,'momento e mediante requisição, informamos que os dados abaixo do titular acima citado'
                ,'se encontram no banco de dados da empresa.'
            ].join('\n'), { x: 120, y: (690-(lineSpace*qtdlin)), size: fontSize, font: timesRomanFont});
        qtdlin++;
        qtdlin++;
        qtdlin++;
        qtdlin++;
        qtdlin++;
        qtdlin++;

        page1.drawText('Origem do dado', {x: 95, y:(690-(lineSpace*(qtdlin-(0.7)))), size: 8, font: timesRomanBoldFont});
        page1.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 30,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(
                ' Dados classificados \n'+
                ' como pessoais \n', {x: 185, y:(690-(lineSpace*(qtdlin-(0.7)))), size: 8, font: timesRomanBoldFont,  lineHeight: 10});
        page1.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 30,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(' Finalidade', {x: 275, y:(690-(lineSpace*(qtdlin-(0.4)))), size: 8, font: timesRomanBoldFont});
        page1.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 30,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText('Prazo', {x: 365, y:(690-(lineSpace*(qtdlin-(0.4)))), size: 8, font: timesRomanBoldFont});
        page1.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 30,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText('Compartilhamento', {x: 455, y:(690-(lineSpace*(qtdlin-(0.4)))), size: 8, font: timesRomanBoldFont});
        page1.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 30,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page1.drawText(
            '   Dado repassado pelo \n'+
            '   cliente no Canal de \n'+
            '       atendimento \n', {x: 90, y:(695-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight: 8,});
        page1.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText('Nome cliente', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page1.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(
            'Comprovar a identificação \n'+
            'pessoal, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont,  lineHeight: 8});
        page1.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.75)))), size: fontSizeTable, font: timesRomanFont,  lineHeight: 8});
        page1.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont,  lineHeight: 8});
        page1.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page1.drawText(
            '   Dado repassado pelo \n'+
            '   cliente no Canal de \n'+
            '       atendimento \n', {x: 90, y:(695-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight: 8,});
        page1.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(
            'Endereço UC(endereço, \n'+
            'municipio, CEP) \n', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page1.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(
            'Comprovar a identificação \n'+
            'pessoal, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont,  lineHeight: 8});
        page1.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.75)))), size: fontSizeTable, font: timesRomanFont,  lineHeight: 8});
        page1.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page1.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont,  lineHeight: 8});
        page1.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });



        //Page2
        qtdlin=0;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight: 8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('CPF', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            '  Documentação de \n'+
            'identificação individual,\n'+
            'conforme regulamentação \n'+
            'da ANEEL.\n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('RG', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Comprovar a identificação \n'+
            'pessoal, conforme \n'+
            'regulamentação da ANEEL \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont,lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('Habilitação (CNH)', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Comprovar a identificação \n'+
            'pessoal, conforme \n'+
            'regulamentação da ANEEL \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente Rural residencial \n'+
            'no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Carteira de trabalho(caso \n'+
             'cliente rural) \n', {x: 185, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Comprovar a identificação pessoal \n'+
            'ou o exercício da atividade na\n'+
            'na unidade consumidora como \n'+
            'cliente rural localizada na \n'+
            'área rural (Grupo B, pessoa \n'+
            'física), com fim residencial, \n'+
            'utilizada por trabalhador rural ou\n'+
            'aposentado nesta condição,\n'+
            'conforme regulamentação\n'+ 
            'da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Enquanto a classificação do \n'+
            'cliente estiver como rural, \n'+
            'após a alteração da \n'+
            'classificação arquivar por 10 \n'+
            'anos caso não tenha nenhuma \n'+
            'restrição, se houver considerar \n'+
            'os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2.0)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('Identificação Funcional', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize    
        });
        page2.drawText(
            'Comprovar a identificação \n'+
            'pessoal, conforme \n'+
            'regulamentação da ANEEL \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize     
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize     
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('Passaporte (estrangeiro)', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Comprovar a identificação \n'+
            'pessoal, caso seja \n'+
            'estrangeiro e não tenha \n'+
            'documento nacional, \n'+
            'conforme regulamentação \n'+
            'da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('Nome mãe', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Comprovar a identificação \n'+
            'pessoal, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('Data Nascimento', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Comprovar a identificação \n'+
            'pessoal e dado obrigatório \n'+
            'para consultas quanto a \n'+
            'situação cadastral do \n'+
            '   documento. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('Procuradores', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Comprovar a identificação \n'+
            'do titular e/ou interessado \n'+
            'e/ou representante, \n'+
            'conforme regulamentação \n'+
            '   da ANEEL.', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('Documentação Procuradores', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Documentação de \n'+
            'identificação individual \n'+
            'conforme regulamentação \n'+
            '   da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page2.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText('Nome sócio', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page2.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Comprovar a identificação \n'+
            'pessoal, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page2.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page2.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin=0;
        page3.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText('Documentação sócio', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Comprovar a identificação \n'+
            'pessoal e legalidade de \n'+
            'uma pessoa jurídica, \n'+
            'conforme regulamentação \n'+
            'da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.6)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        //Page3
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page3.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText('Nome Cônjuge', {x: 185, y:(690-(lineSpace*(qtdlin-(2.0)))), size: fontSizeTable, font: timesRomanFont});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Obrigação contratual, para \n'+
            'contratação de serviços da \n'+
            'Enel X e em atendimento à \n'+
            'solicitação a pedido do \n'+
            'cliente para que ele possa \n'+
            'aderir ou solicitar serviços, \n'+
            'conforme regulamentação \n'+
            'da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2.0)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page3.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText('Documentação Cônjuge', {x: 185, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Obrigação contratual, para \n'+
            'contratação de serviços da \n'+
            'Enel X e em atendimento à \n'+
            'solicitação a pedido do \n'+
            'cliente para que ele possa \n'+
            'aderir ou solicitar serviços, \n'+
            'conforme regulamentação \n'+
            'da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page3.drawText(
            'Canais de \n'+
            'atendimento - \n'+
            'Solicitação de \n'+
            'fornecimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText('Número instalação', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Localização para realizar a \n'+
            'contratação de serviços da \n'+
            'entrega da energia (ponto \n'+
            'de conexão), conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.8)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de\n'+
            'Privacidade\n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page3.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText('Ponto de referência', {x: 185, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Comunicação com o \n'+
            'cliente e envio de fatura, \n'+
            'caso seja diferente da \n'+
            'unidade consumidora, \n'+
            'conforme regulamentação \n'+
            'da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Enquanto o cliente estiver \n'+
            'tiver a opção de entrega de \n'+
            'correspondências em outro \n'+
            'endereço, após a alteração \n'+
            'arquivar por 10 anos caso não \n'+
            'tenha nenhuma restrição, se \n'+
            'houver considerar os 10 anos \n'+
            'após o encerramento da \n'+
            'restrição. \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page3.drawText(
            'Canais de \n'+
            'atendimento -\n'+
            'Solicitação de\n'+
            'fornecimento\n',{x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText('CEP', {x: 185, y:(690-(lineSpace*(qtdlin-(1.8)))), size: fontSizeTable, font: timesRomanFont});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Comunicação \n'+
            'identificação do cliente e\n'+
            'necessário ao fisco,\n'+
            'conforme regulamentação\n'+
            'da ANEEL.\n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.6)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.8)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page3.drawText(
            '  Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            '   atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Classificação tipo do cliente\n'+
            '(Residencial, rural etc.)\n', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Registrar a atividade \n'+
            'exercida na unidade\n'+
            'consumidora, conforme\n'+
            'regulamentação da ANEEL.\n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual,\n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.8)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de\n'+
            'Privacidade\n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page3.drawText(
            'Canais de\n'+
            'atendimento -\n'+
            'Solicitação de \n'+
            'fornecimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText('Coordenadas geográficas', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Localização para realizar a \n'+
            'entrega da energia (ponto \n'+
            'de conexão), conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.8)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page3.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText('CNAE', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page3.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Registrar a atividade \n'+
            'exercida na unidade \n'+
            'consumidora, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.8)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page3.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page3.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin=0;
        page4.drawText(
            'Dado repassado pelo \n'+
            'cliente rural residencial \n'+
            'no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText('Inscrição Rural', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Registrar a atividade \n'+
            'exercida na unidade \n'+
            'consumidora, conforme \n'+
            'regulamentação da ANEEL. \n'
        , {x: 275, y:(690-(lineSpace*(qtdlin-(1.6)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.8)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page4.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText('Telefone', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page4.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Comunicação com o \n'+ 
            'cliente \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, ou \n'+
            'caso o cliente solicite a \n'+
            'eliminação do dado \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8 });
        page4.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page4.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText('E-mail Cliente', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page4.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Comunicação proativa com \n'+ 
            'o cliente ou mediante à \n'+
            'uma resposta de \n'+
            'solicitação e envio de \n'+
            'fatura \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize     
        });
        page4.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, ou \n'+
            'caso o cliente solicite a \n'+
            'eliminação do dado \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.6)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page4.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText('Dados bancários', {x: 185, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont});
        page4.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Realizar pagamento \n'+ 
            'automáticos, conforme \n'+
            'regulamentação da ANEEL \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Enquanto o cliente estiver \n'+
            'como débito automático, após \n'+
            'a alteração arquivar por 10 \n'+
            'anos caso não tenha nenhuma \n'+
            'restrição, se houver considerar \n'+
            'os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page4.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Endereço de entrega \n'+
            '(endereço, município, CEP) \n', {x: 185, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Comunicação com o \n' +
            'cliente e envio de fatura, \n'+
            'caso seja diferente da \n'+
            'unidade consumidora, \n'+
            'conforme regulamentação \n'+
            '   da ANEEL \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Enquanto o cliente estiver \n'+
            'tiver a opção de entrega de \n'+
            'correspondências em outro \n'+
            'endereço, após a alteração \n'+
            'arquivar por 10 anos caso não \n'+
            'tenha nenhuma restrição, se \n'+
            'houver considerar os 10 anos \n'+
            'após o encerramento da \n'+
            '       restrição       \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page4.drawText(
            'Canais de \n'+
            'atendimento - \n'+
            'Solicitação de \n'+
            'fornecimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Classificação Serviço \n'+
            'Essencial \n', {x: 185, y:(690-(lineSpace*(qtdlin-(2.0)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Registrar a atividade \n'+ 
            'exercida na unidade \n'+
            'consumidora, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Enquanto a classificação do \n'+
            'cliente estiver como vital, após \n'+
            'a alteração da classificação \n'+
            'arquivar por 10 anos caso não \n'+
            'tenha nenhuma restrição, se \n'+
            'houver considerar os 10 anos \n'+
            'após o encerramento da \n'+
            'restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page4.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        }); 
        page4.drawText('Dados beneficiário', {x: 185, y:(690-(lineSpace*(qtdlin-(2.0)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Para concessão da \n'+ 
            'subclasse residencial baixa \n'+
            'renda, conforme \n'+
            'regulamentação da ANEEL \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Enquanto a classificação do \n'+
            'cliente estiver como vital, após \n'+
            'a alteração da classificação \n'+
            'arquivar por 10 anos caso não \n'+
            'tenha nenhuma restrição, se \n'+
            'houver considerar os 10 anos \n'+
            'após o encerramento da \n'+
            'restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page4.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText('NIS', {x: 185, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont});
        page4.drawRectangle({
            x: 180,
             y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Para concessão da \n'+ 
            'subclasse residencial baixa \n'+
            'renda, conforme \n'+
            'regulamentação da ANEEL \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Enquanto a classificação do \n'+
            'cliente estiver como vital, após \n'+
            'a alteração da classificação \n'+
            'arquivar por 10 anos caso não \n'+
            'tenha nenhuma restrição, se \n'+
            'houver considerar os 10 anos \n'+
            'após o encerramento da \n'+
            'restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page4.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page4.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        //inicio
        qtdlin=0;
        page5.drawText(
            'Dado repassado pelo \n'+
            'cliente indígena nno Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText('RANI', {x: 185, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont});
        page5.drawRectangle({
            x: 180,
             y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Comprovar identificação\n'+ 
            'pessoal, conforme \n'+
            'regulamentação da ANEEL \n', {x: 275, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Tempo indeterminado até o \n'+
            'encerramento contratual, \n'+
            'após o encerramento arquivar  \n'+
            'até 10 anos caso não tenha \n'+
            'nenhuma restrição, se houver  \n'+
            'considerar os 10 anos após o \n'+
            'encerramento da restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        //fim
        qtdlin++;
        qtdlin++;
        page5.drawText(
            'Dado repassado pela \n'+
            'base do Ministério do \n'+
            'Desenvolvimento Social \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText('Renda Familiar', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont});
        page5.drawRectangle({
            x: 180,
             y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Para concessão da \n'+ 
            'subclasse residencial baixa \n'+
            'renda, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Após a efetivação do cadastro \n'+
            'como baixa renda o dado deve \n'+
            'ser excluído \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page5.drawText(
            'Dado repassado pelo \n'+
            'cliente no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText( 
            'Tipo cliente: \n'+
            'Quilombola/Índigena \n', {x: 185, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 180,
             y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Para concessão da \n'+ 
            'pessoal, subclasse residencial baixa \n'+
            'renda, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 273, y:(690-(lineSpace*(qtdlin-(2.2)))), size: fontSizeTable, font: timesRomanFont , lineHeight:8});
        page5.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Enquanto a classificação do \n'+
            'cliente estiver como vital, após \n'+
            'a alteração da classificação \n'+
            'arquivar por 10 anos caso não \n'+
            'tenha nenhuma restrição, se \n'+
            'houver considerar os 10 anos \n'+
            'após o encerramento da \n'+
            'restrição \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        page5.drawText(
            'Dado repassado pela \n'+
            'base do Ministério do \n'+
            'Desenvolvimento Social \n', {x: 95, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Número de pessoas no \n'+
            '   domicílio \n', {x: 185, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 180,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Para concessão da \n'+ 
            'pessoal, subclasse residencial baixa \n'+
            'renda, conforme \n'+
            'regulamentação da ANEEL. \n', {x: 275, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Após a efetivação do cadastro \n'+
            'como baixa renda o dado deve \n'+
            'ser excluído \n', {x: 365, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(1.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 60,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page5.drawText(
            'Dado repassado pelo \n'+
            'cliente vital no Canal de \n'+
            'atendimento \n', {x: 95, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 90,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText('Atestado Médico', {x: 185, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont});
        page5.drawRectangle({
            x: 180,
             y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Utilizado para comprovar a \n'+ 
            'eletro dependência para \n'+
            'sobrevivência humana, nos \n'+
            'atendidos à clientes Vitais, \n'+
            'conforme regulamentação \n'+
            'da ANEEL.', {x: 275, y:(690-(lineSpace*(qtdlin-(2.5)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 270,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Enquanto a classificação do \n'+
            'cliente estiver como vital, após \n'+
            'a alteração da classificação \n'+
            'arquivar por 10 anos caso não \n'+
            'tenha nenhuma restrição, se \n'+
            'houver considerar os 10 anos \n'+
            'após o encerramento \n'+
            ' da restrição. \n', {x: 365, y:(690-(lineSpace*(qtdlin-(2.7)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 360,
            y: (690-(lineSpace*qtdlin)),
            width: 90,
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        page5.drawText(
            'Conforme nossa \n'+
            'Política e Aviso de \n'+
            'Privacidade \n', {x: 455, y:(690-(lineSpace*(qtdlin-(2)))), size: fontSizeTable, font: timesRomanFont, lineHeight:8});
        page5.drawRectangle({
            x: 450,
            y: (690-(lineSpace*qtdlin)),
            width: 90,  
            height: 90,
            borderColor: PDFLib.rgb(0,0,0),
            borderWidth: borderSize      
        });
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page5.drawText(
            'Caso haja discordância do parecer acima, poderá apresentar sua manifestação em nossas \n'+
            'lojas de atendimento em dias úteis das 08h às 16h ou em nossa Central de Atendimento \n'+
            '0800 062 01 96 disponível 24h. \n',{x:120, y:(690-(lineSpace*qtdlin)), size: fontSize, font: timesRomanFont, lineHeight:15});
        qtdlin++;
        qtdlin++;
        qtdlin++;
        page5.drawText('Atenciosamente', {x:120, y:(690-(lineSpace*qtdlin)), size: fontSize, font: timesRomanFont});
        qtdlin++;
        page5.drawText('Enel', {x:120, y:(690-(lineSpace*qtdlin)), size: fontSize, font: timesRomanFont});



        const pdfBytes = await pdfDoc.save();
        this.saveByteArray("My PDF", pdfBytes);
    }
    saveByteArray(pdfName, byte) {
        var blob = new Blob([byte], { type: "application/pdf" });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        var fileName = pdfName;
        link.download = fileName;
        link.click();
    }
}