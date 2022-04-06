/**
 * @description       : 
 * @author            : jefferson.rocha@engdb.com.br
 * @group             : 
 * @last modified on  : 01-28-2022
 * @last modified by  : jefferson.rocha@engdb.com.br
 * Modifications Log
 * Ver   Date         Author                         Modification
 * 1.0   01-27-2022   jefferson.rocha@engdb.com.br   Initial Version
**/
import { LightningElement, track, api, wire  } from 'lwc';
import saveLgpdInformations from '@salesforce/apex/AccountLGPD.saveLgpdInformations';
import { getRecord } from 'lightning/uiRecordApi';
import pdflib from "@salesforce/resourceUrl/pdflib";
import { loadScript } from "lightning/platformResourceLoader";
import Logo_Enel_LGPD from "@salesforce/resourceUrl/Logo_Enel_LGPD";
import generatePDF from '@salesforce/apex/AccountLGPD.generatePDF';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import PDFCONSENTIMENTTERM from '@salesforce/resourceUrl/pdfConsentimentTerm';
import getProtocolo from '@salesforce/apex/AccountLGPD.getProtocolo';
import LgpdCreateCaseCarta from '@salesforce/apex/AccountLGPD.LgpdCreateCaseCarta';

//const FIELDS = ['Account.LGPDNoCampaignNotices__c','Account.LGPDNoDebitNotices__c','Account.LGPDNoInstitutionalNewsletter__c','Account.LGPDNoElectricitySector__c','Account.LGPDNoSavingTips__c','Account.LGPDNoSafetyTips__c','Account.LGPDNoMaintenanceNotices__c','Account.LGPDNoComunications__c','Account.LGPDYesShareMarketingData__c', 'Account.LGPDYesMarketingData__c','Account.LGPDNoMkt__c','Account.LGPDNoNowMkt__c', 'Account.LGPDNoSharedMkt__c','Account.LGPDNoNowSharedMkt__c','Account.Name','Account.LGPDDateUpdateTerms__c','Account.LGPDCase__c'];

export default class LgpdAccountTermSendInformations extends LightningElement {

    @api recordId;
    @track byesMkt                  = false;
    @track bnoMkt                   = false;
    @track bnoNowMkt                = false;
    @track byesSharedMkt            = false;
    @track bnoSharedMkt             = false;
    @track bnoNowSharedMkt          = false;
    @track bnoComunications         = false;
    @track bnoMaintenanceNotices    = false;
    @track bnoSafetyTips            = false;
    @track bnoSavingTips            = false;
    @track bnoElectricitySector     = false;
    @track bnoInstitutionalNewsletter = false;
    @track bnoDebitNotices          = false;
    @track bnoCampaignNotices       = false;
    account;
    @track accountName              = '';
    @track dataUpdate               = null;
    showSpinner = false;
    @track caseNumber              = '';
    @track showPopup               = false;
    @track bsendEmail              = false;
    @track bPrinter                = false;

    connectedCallback(){
        this.getProt();
    }

    closeEditModal() {
        this.showPopup = false;
    }    

    /*@wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        if(data) {
            this.account = data;
            this.dataUpdate = this.account.fields.LGPDDateUpdateTerms__c.value;

            if(this.dataUpdate != null && this.dataUpdate != ''){

                if(this.account.fields.LGPDNoCampaignNotices__c.value == true){
                    this.template.querySelector('[data-id="noCampaignNotices"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noCampaignNotices"]').checked = true;
                }
                this.bnoCampaignNotices = this.account.fields.LGPDNoCampaignNotices__c.value;
    
                if(this.account.fields.LGPDNoDebitNotices__c.value == true){
                    this.template.querySelector('[data-id="noDebitNotices"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noDebitNotices"]').checked = true;
                }            
                this.bnoDebitNotices = this.account.fields.LGPDNoDebitNotices__c.value;
    
                if(this.account.fields.LGPDNoInstitutionalNewsletter__c.value == true){
                    this.template.querySelector('[data-id="noInstitutionalNewsletter"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noInstitutionalNewsletter"]').checked = true;
                }            
                this.bnoInstitutionalNewsletter = this.account.fields.LGPDNoInstitutionalNewsletter__c.value;
    
                if(this.account.fields.LGPDNoElectricitySector__c.value == true){
                    this.template.querySelector('[data-id="noElectricitySector"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noElectricitySector"]').checked = true;
                }    
                this.bnoElectricitySector = this.account.fields.LGPDNoElectricitySector__c.value;
    
                if(this.account.fields.LGPDNoSavingTips__c.value == true){
                    this.template.querySelector('[data-id="noSavingTips"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noSavingTips"]').checked = true;
                }             
                this.bnoSavingTips = this.account.fields.LGPDNoSavingTips__c.value;
    
                if(this.account.fields.LGPDNoSafetyTips__c.value == true){
                    this.template.querySelector('[data-id="noSafetyTips"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noSafetyTips"]').checked = true;
                }  
                this.bnoSafetyTips = this.account.fields.LGPDNoSafetyTips__c.value;
    
                if(this.account.fields.LGPDNoMaintenanceNotices__c.value == true){
                    this.template.querySelector('[data-id="noMaintenanceNotices"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noMaintenanceNotices"]').checked = true;
                }
                this.bnoMaintenanceNotices = this.account.fields.LGPDNoMaintenanceNotices__c.value;
    
                if(this.account.fields.LGPDNoComunications__c.value == true){
                    this.template.querySelector('[data-id="noComunications"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noComunications"]').checked = true;
                }            
                this.bnoComunications = this.account.fields.LGPDNoComunications__c.value;
                
                if(this.account.fields.LGPDYesShareMarketingData__c.value == true){
                    this.template.querySelector('[data-id="yesSharedMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="yesSharedMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="noSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noSharedMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noNowSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noNowSharedMkt"]').checked = false;    
                }
                this.byesSharedMkt = this.account.fields.LGPDYesShareMarketingData__c.value;
    
                if(this.account.fields.LGPDYesMarketingData__c.value == true){
                    this.template.querySelector('[data-id="yesMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="yesMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="noMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noNowMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noNowMkt"]').checked = false;    
                }   
                this.byesMkt = this.account.fields.LGPDYesMarketingData__c.value;
    
                if(this.account.fields.LGPDNoMkt__c.value == true){
                    this.template.querySelector('[data-id="noMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="yesMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="yesMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noNowMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noNowMkt"]').checked = false;    
                }   
                this.bnoMkt = this.account.fields.LGPDNoMkt__c.value;            
                
                if(this.account.fields.LGPDNoNowMkt__c.value == true){
                    this.template.querySelector('[data-id="noNowMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noNowMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="yesMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="yesMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noMkt"]').checked = false;    
                }   
                this.bnoNowMkt = this.account.fields.LGPDNoNowMkt__c.value;  
    
                if(this.account.fields.LGPDNoSharedMkt__c.value == true){
                    this.template.querySelector('[data-id="noSharedMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noSharedMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="yesSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="yesSharedMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noNowSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noNowSharedMkt"]').checked = false;    
                }   
                this.bnoSharedMkt = this.account.fields.LGPDNoSharedMkt__c.value; 
                
                if(this.account.fields.LGPDNoNowSharedMkt__c.value == true){
                    this.template.querySelector('[data-id="noNowSharedMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noNowSharedMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="yesSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="yesSharedMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noSharedMkt"]').checked = false;    
                }   
                this.bnoNowSharedMkt = this.account.fields.LGPDNoNowSharedMkt__c.value;  
            }

            if((this.bnoNowSharedMkt || this.bnoNowMkt) || (!this.bnoNowMkt && !this.byesMkt && !this.bnoMkt) || (!this.byesSharedMkt && !this.bnoSharedMkt && !this.bnoNowSharedMkt)){
                this.showPopup = true; 
            }
            
            this.accountName = this.account.fields.Name.value;
        }
    }    */

    saveLgpdInformationsJs(){
        this.showSpinner = true;
        saveLgpdInformations({ accountId : this.recordId, bnoCampaignNotices : this.bnoCampaignNotices, bnoDebitNotices: this.bnoDebitNotices, bnoInstitutionalNewsletter : this.bnoInstitutionalNewsletter, bnoElectricitySector : this.bnoElectricitySector, bnoSavingTips: this.bnoSavingTips, bnoSafetyTips : this.bnoSafetyTips, bnoMaintenanceNotices : this.bnoMaintenanceNotices, bnoComunications : this.bnoComunications, byesSharedMkt : this.byesSharedMkt, byesMkt : this.byesMkt, bnoMkt : this.bnoMkt, bnoNowMkt : this.bnoNowMkt, bnoSharedMkt : this.bnoSharedMkt, bnoNowSharedMkt : this.bnoNowSharedMkt}).then( (response) => {
            console.log('response saveLgpdInformations', response);
            this.showSpinner = false;
            this.showToast('Informações do LGPD atualizadas com sucesso!', 'success');
            let retAccount = response;
            let reason = this.bnoMkt ? true : false;

            if(this.bsendEmail){
                LgpdCreateCaseCarta({ sub : reason, dadosDescription: retAccount, accountId : this.recordId }).then( (response) => {
                    console.log('response LgpdCreateCaseCarta', response);
                    generatePDF({ accountId : this.recordId}).then( (response) => {
                        console.log('response sendEmail', response);
                        this.showSpinner = false;            
                        this.showToast('E-mail enviado com sucesso!', 'success');
                    } ).catch( (error) => {
                        console.log('Problem response sendEmail  - Details: '+JSON.stringify(error));
                        this.showToast('Erro ao enviar email.', 'error');
                    } );
                } ).catch( (errorC) => {
                    console.log('Problem response LgpdCreateCaseCarta  - Details: '+JSON.stringify(errorC));
                    console.log('Problem response LgpdCreateCaseCarta  - error: '+errorC);
                } );

                this.bsendEmail = false;
            }
            
            if(this.bPrinter){
                LgpdCreateCaseCarta({ sub : reason, dadosDescription: retAccount, accountId : this.recordId }).then( (response) => {
                    getProtocolo({ accountId : this.recordId}).then( (response) => {
                        this.caseNumber = response.LGPDCase__r.CaseNumber;
                        this.createPdf();
                    } ).catch( (errorG) => {
                        console.log('Problem response getProtocolo  - Details: '+JSON.stringify(errorG));
                    } );                                        
                } ).catch( (errorC) => {
                    console.log('Problem response LgpdCreateCaseCarta  - Details: '+JSON.stringify(errorC));
                    console.log('Problem response LgpdCreateCaseCarta  - error: '+errorC);
                } );
                this.bPrinter = false;
            }

        } ).catch( (error) => {
            console.log('Problem response saveLgpdInformations  - Details: '+JSON.stringify(error));
            this.showToast('Erro ao atualizar informações do LGPD.', 'error');
        } );
    }    

    setyesMkt(){
        this.template.querySelector('[data-id="noMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="noMkt"]').checked = false;    

        this.template.querySelector('[data-id="noNowMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="noNowMkt"]').checked = false;    

        this.bnoMkt       = false;
        this.bnoNowMkt    = false;
        this.byesMkt      = !this.byesMkt ? true : false;
    }

    setnoMkt(){
        this.template.querySelector('[data-id="yesMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="yesMkt"]').checked = false;    

        this.template.querySelector('[data-id="noNowMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="noNowMkt"]').checked = false;    

        this.byesMkt      = false;
        this.bnoNowMkt    = false;
        this.bnoMkt       = !this.bnoMkt ? true : false;
    }    

    setnoNowMkt(){
        this.template.querySelector('[data-id="yesMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="yesMkt"]').checked = false;    

        this.template.querySelector('[data-id="noMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="noMkt"]').checked = false;    

        this.byesMkt      = false;
        this.bnoNowMkt    = !this.bnoNowMkt ? true : false;
        this.bnoMkt       = false;
    }  

    setyesSharedMkt(){
        this.template.querySelector('[data-id="noSharedMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="noSharedMkt"]').checked = false;    

        this.template.querySelector('[data-id="noNowSharedMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="noNowSharedMkt"]').checked = false;    

        this.bnoSharedMkt       = false;
        this.bnoNowSharedMkt    = false;
        this.byesSharedMkt      = !this.byesSharedMkt ? true : false;
    }

    setnoSharedMkt(){
        this.template.querySelector('[data-id="yesSharedMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="yesSharedMkt"]').checked = false;    

        this.template.querySelector('[data-id="noNowSharedMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="noNowSharedMkt"]').checked = false;    

        this.bnoSharedMkt       = !this.bnoSharedMkt ? true : false;
        this.bnoNowSharedMkt    = false;
        this.byesSharedMkt      = false;
    }    

    setnoNowSharedMkt(){
        this.template.querySelector('[data-id="yesSharedMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="yesSharedMkt"]').checked = false;    

        this.template.querySelector('[data-id="noSharedMkt"]').removeAttribute('checked');
        this.template.querySelector('[data-id="noSharedMkt"]').checked = false;    

        this.bnoSharedMkt       = false;
        this.bnoNowSharedMkt    = !this.bnoNowSharedMkt ? true : false;
        this.byesSharedMkt      = false;
    }    

    setnoComunications(){
        this.bnoComunications      = !this.bnoComunications ? true : false;
    }   

    setnoMaintenanceNotices(){
        this.bnoMaintenanceNotices      = !this.bnoMaintenanceNotices ? true : false;
    }   

    setnoSafetyTips(){
        this.bnoSafetyTips      = !this.bnoSafetyTips ? true : false;
    }   
    
    setnoSavingTips(){
        this.bnoSavingTips      = !this.bnoSavingTips ? true : false;
    }   

    setnoElectricitySector(){
        this.bnoElectricitySector      = !this.bnoElectricitySector ? true : false;
    }   

    setnoInstitutionalNewsletter(){
        this.bnoInstitutionalNewsletter      = !this.bnoInstitutionalNewsletter ? true : false;
    }   

    setnoDebitNotices(){
        this.bnoDebitNotices      = !this.bnoDebitNotices ? true : false;
    }   

    setnoCampaignNotices(){
        this.bnoCampaignNotices      = !this.bnoCampaignNotices ? true : false;
    }   
    
    renderedCallback() {
        loadScript(this, pdflib).then(() => {});
    }

    async createPdf() {

        if(this.byesSharedMkt || this.byesMkt){
            this.createConsentPdf();
        }

        const pdfDoc = await PDFLib.PDFDocument.create();
        const helveticaFont = await pdfDoc.embedFont(
          PDFLib.StandardFonts.Helvetica
        );

        const page = pdfDoc.addPage();
        const { width, height } = page.getSize();
        const fontSize = 10;
        const lineSpace = 30;
        let qtLin = 0;
        const helveticaBold = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold)

        const emblemUrl = Logo_Enel_LGPD;
        const emblemImageBytes = await fetch(emblemUrl).then(res => res.arrayBuffer())
        const emblemImage = await pdfDoc.embedPng(emblemImageBytes)
        const pngDims = emblemImage.scale(0.5);

        page.drawImage(emblemImage, {
            x: 50,
            y: 720,
            width: 80,
            height: 80,
        })
        
        page.drawText('Prezado(a) '+this.accountName+',', { x: 50, y: 700, size: fontSize });

        qtLin++;
        page.drawText('Sua solicitação de exclusão de comunicados da Enel foi efetuada com sucesso.', { x: 50, y: (700-(lineSpace*qtLin)), size: fontSize, color: PDFLib.rgb(0, 0.53, 0.71) });

        if(this.caseNumber != ''){
            qtLin++;
            page.drawText('O número do seu atendimento é '+this.caseNumber, { x: 50, y: (700-lineSpace*qtLin), size: fontSize  });
        }
        
        qtLin++;
        qtLin++;
        page.drawText(
            [
                '   O envio dos comunicados e correspondências abaixo, passam a partir de agora não serem mais enviados no'
                ,'formato digital. As informações estarão disponíveis em nossos outros meios de comunicação como mensagem.'
                ,'Na fatura de energia elétrica, site, carta impressa enviada para o endereço da sua unidade consumidora ou'
                ,'lojas de atendimento. A qualquer momento, os serviços podem ser optados novamente, mediante a sua solicitação:'
            ].join('\n'), { x: 50, y: (700-(lineSpace*qtLin)), size: fontSize });
        
        qtLin++;
        qtLin++;
        qtLin++;

        if(this.bnoComunications){
            qtLin++;
            page.drawText(' • Correspondências;', { x: 50, y: (700-lineSpace*qtLin), size: fontSize, font: helveticaBold });
        }

        if(this.bnoMaintenanceNotices){
            qtLin++;
            page.drawText(' • Avisos de programação para manutenção na rede elétrica da sua região;', { x: 50, y: (700-lineSpace*qtLin), size: fontSize, font: helveticaBold  });
        }

        if(this.bnoSafetyTips){
            qtLin++;
            page.drawText(' • Dicas de economia;', { x: 50, y: (700-lineSpace*qtLin), size: fontSize, font: helveticaBold  });
        }


        if(this.bnoSavingTips){
            qtLin++;
            page.drawText(' • Dicas de segurança;', { x: 50, y: (700-lineSpace*qtLin), size: fontSize, font: helveticaBold  });
        }

        if(this.bnoElectricitySector){
            qtLin++;
            page.drawText(' • Informações sobre o setor elétrico;', { x: 50, y: (700-lineSpace*qtLin), size: fontSize, font: helveticaBold  });
        }

        if(this.bnoInstitutionalNewsletter){
            qtLin++;
            page.drawText(' • Informativos institucionais e orientação dos serviços disponibilizados pela Enel;', { x: 50, y: (700-lineSpace*qtLin), size: fontSize, font: helveticaBold  });
        }        

        if(this.bnoDebitNotices){
            qtLin++;
            page.drawText(' • Avisos de débitos em aberto;', { x: 50, y: (700-lineSpace*qtLin), size: fontSize, font: helveticaBold  });
        }        

        if(this.bnoCampaignNotices){
            qtLin++;
            page.drawText(' • Avisos de campanhas;', { x: 50, y: (700-lineSpace*qtLin), size: fontSize, font: helveticaBold  });
        }  
        
        qtLin++;
        qtLin++;
        page.drawText('Caso tenha dúvidas em relação as condições deste serviço, segue abaixo o seu termo de exclusão.', { x: 50, y: (700-lineSpace*qtLin), size: fontSize });
    
        qtLin++;
        qtLin++;
        page.drawText("Termo de Exclusão", {
          x: 50,
          y: (700-lineSpace*qtLin),
          size: 15,
          font: helveticaFont
        });

        qtLin++;
        page.drawText(
            [
                '   O presente Termo de Exclusão entrará em vigor na data de sua aceitação e permanecerá válido por prazo'
                ,'indeterminado'
        ].join('\n'), { x: 50, y: (700-(lineSpace*qtLin)), size: fontSize });

        qtLin++;
        qtLin++;
        page.drawText(
            [
                '   A Enel Distribuição passará a utilizar as comunicações via carta impressa para o endereço da unidade consumidora'
                ,'ou mensagem na conta de energia elétrica, cumprindo os devidos prazos regulados e sem custo adicional ao cliente.'
        ].join('\n'), { x: 50, y: (700-(lineSpace*qtLin)), size: fontSize });
        
        qtLin++;
        qtLin++;
        page.drawText(
            [
                '   A mudança para o meio eletrônico, poderá acontecer a qualquer momento, mediante a sua solicitação, conforme ',
                'previsto no §5º do artigo 8º da Lei Geral de Proteção de Dados.'
        ].join('\n'), { x: 50, y: (700-(lineSpace*qtLin)), size: fontSize });

        qtLin++;
        qtLin++;
        page.drawText('   Demais solicitações deverão ter seu modo de resposta indicado no momento do registro.', { x: 50, y: (700-lineSpace*qtLin), size: fontSize });
    
        qtLin++;
        page.drawText(
            [
                '   A eventual adesão deste serviço e retorno ao processo de recebimento de comunicados impressos pode ser '
                ,'realizado a qualquer momento, por meio da nossa agência virtual, aplicativo ou demais canais de atendimento.'
        ].join('\n'), { x: 50, y: (700-(lineSpace*qtLin)), size: fontSize });


        const page2 = pdfDoc.addPage();
        const { width2, height2 } = page2.getSize();
        qtLin = 1;

        page2.drawText(
            [
                'Importante: a Enel não envia e-mails com solicitações de dados confidenciais aos seus clientes, nem solicita depósito em '
                ,'conta bancária. Caso receba mensagens com instruções duvidosas, desconsidere, e havendo dúvidas, consulte nossos'
                ,'anais de atendimento.'
        ].join('\n'), { x: 50, y: 700, size: fontSize, font: helveticaBold });

        qtLin++;
        qtLin++;
        page2.drawText(
            [
                'Atenciosamente,'
                ,'Enel'
        ].join('\n'), { x: 50, y: (700-(lineSpace*qtLin)), size: fontSize });

        const pdfBytes = await pdfDoc.save();
        this.saveByteArray("Termo de Exclusão "+this.accountName, pdfBytes);
        
    } 
    
    createConsentPdf(){
        var file_path = PDFCONSENTIMENTTERM;
        var a = document.createElement('A');
        a.href = file_path;
        a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } 
    
    saveByteArray(pdfName, byte) {
        var blob = new Blob([byte], { type: "application/pdf" });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        var fileName = pdfName;
        link.download = fileName;
        link.click();
    }
      
    sendEmail() {
        this.bsendEmail = true;
        this.saveLgpdInformationsJs();
        this.showSpinner = true;
    }

    printer() {
        this.bPrinter = true;
        this.saveLgpdInformationsJs();
    }    

    showToast(message, variant) {
        let title = variant == 'error' ? 'Error' : 'Success';
        const evt = new ShowToastEvent({
          title: title,
          message: message,
          variant: variant
        });
        this.dispatchEvent(evt);
      }    
     
    getProt(){
        getProtocolo({ accountId : this.recordId}).then( (response) => {
            console.log('response getProtocolo', response);
            //this.caseNumber = response;
            this.account = response;
            if(response != null && response != ''){
                this.caseNumber = response.LGPDCase__r.CaseNumber;
                if(response.autoriz8__c == 'Yes'){
                    this.template.querySelector('[data-id="noCampaignNotices"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noCampaignNotices"]').checked = true;
                }
                this.bnoCampaignNotices = response.autoriz8__c == 'Yes' ? true : false;
    
                if(response.autoriz7__c == 'Yes'){
                    this.template.querySelector('[data-id="noDebitNotices"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noDebitNotices"]').checked = true;
                }            
                this.bnoDebitNotices = response.autoriz7__c == 'Yes' ? true : false;
    
                if(response.autoriz6__c == 'Yes'){
                    this.template.querySelector('[data-id="noInstitutionalNewsletter"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noInstitutionalNewsletter"]').checked = true;
                }            
                this.bnoInstitutionalNewsletter = response.autoriz6__c == 'Yes' ? true : false;
    
                if(response.autoriz5__c == 'Yes'){
                    this.template.querySelector('[data-id="noElectricitySector"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noElectricitySector"]').checked = true;
                }    
                this.bnoElectricitySector = response.autoriz5__c == 'Yes' ? true : false;
    
                if(response.autoriz4__c == 'Yes'){
                    this.template.querySelector('[data-id="noSavingTips"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noSavingTips"]').checked = true;
                }             
                this.bnoSavingTips = response.autoriz4__c == 'Yes' ? true : false;
    
                if(response.autoriz3__c == 'Yes'){
                    this.template.querySelector('[data-id="noSafetyTips"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noSafetyTips"]').checked = true;
                }  
                this.bnoSafetyTips = response.autoriz3__c == 'Yes' ? true : false;
    
                if(response.autoriz2__c == 'Yes'){
                    this.template.querySelector('[data-id="noMaintenanceNotices"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noMaintenanceNotices"]').checked = true;
                }
                this.bnoMaintenanceNotices = response.autoriz2__c == 'Yes' ? true : false;
    
                if(response.autoriz1__c == 'Yes'){
                    this.template.querySelector('[data-id="noComunications"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noComunications"]').checked = true;
                }            
                this.bnoComunications = response.autoriz1__c == 'Yes' ? true : false;
                
                if(response.LGPDYesShareMarketingData__c == true){
                    this.template.querySelector('[data-id="yesSharedMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="yesSharedMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="noSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noSharedMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noNowSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noNowSharedMkt"]').checked = false;    
                }
                this.byesSharedMkt = response.LGPDYesShareMarketingData__c;
    
                if(response.LGPDYesMarketingData__c == true){
                    this.template.querySelector('[data-id="yesMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="yesMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="noMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noNowMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noNowMkt"]').checked = false;    
                }   
                this.byesMkt = response.LGPDYesMarketingData__c;
    
                if(response.LGPDNoMkt__c == true){
                    this.template.querySelector('[data-id="noMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="yesMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="yesMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noNowMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noNowMkt"]').checked = false;    
                }   
                this.bnoMkt = response.LGPDNoMkt__c;            
                
                if(response.LGPDNoNowMkt__c == true){
                    this.template.querySelector('[data-id="noNowMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noNowMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="yesMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="yesMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noMkt"]').checked = false;    
                }   
                this.bnoNowMkt = response.LGPDNoNowMkt__c;  
    
                if(response.LGPDNoSharedMkt__c == true){
                    this.template.querySelector('[data-id="noSharedMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noSharedMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="yesSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="yesSharedMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noNowSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noNowSharedMkt"]').checked = false;    
                }   
                this.bnoSharedMkt = response.LGPDNoSharedMkt__c; 
                
                if(response.LGPDNoNowSharedMkt__c == true){
                    this.template.querySelector('[data-id="noNowSharedMkt"]').setAttribute("checked", true);
                    this.template.querySelector('[data-id="noNowSharedMkt"]').checked = true;
    
                    this.template.querySelector('[data-id="yesSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="yesSharedMkt"]').checked = false;    
            
                    this.template.querySelector('[data-id="noSharedMkt"]').removeAttribute('checked');
                    this.template.querySelector('[data-id="noSharedMkt"]').checked = false;    
                }   
                this.bnoNowSharedMkt = response.LGPDNoNowSharedMkt__c;  
            }
            
            if((this.bnoNowSharedMkt || this.bnoNowMkt) || (!this.bnoNowMkt && !this.byesMkt && !this.bnoMkt) || (!this.byesSharedMkt && !this.bnoSharedMkt && !this.bnoNowSharedMkt)){
                this.showPopup = true; 
            }
            
            this.accountName = response.Name;
            
            if(!this.showPopup && (this.bnoMkt || this.bnoSharedMkt)){
                this.showPopup = true;
            }

        } ).catch( (error) => {
            console.log('Problem response getProtocolo  - Details: '+JSON.stringify(error));
        } );
    }

}