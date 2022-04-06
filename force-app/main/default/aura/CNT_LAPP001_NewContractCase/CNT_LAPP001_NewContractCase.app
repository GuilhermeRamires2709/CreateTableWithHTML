<aura:application extends="force:slds" controller="CNT_CMPC_NewContractCase">
 
    <lightning:notificationsLibrary aura:id="notificationsLib"/>

    <aura:dependency resource="markup://force:*" type="EVENT"/>
  
    <aura:attribute name="activeSections" type="List" default="['A','B','C','D']" />
    <aura:attribute name="showB2CSection" type="Boolean" default="true"/>
    <aura:attribute name="showB2CSection2" type="Boolean" default="false"/>
    <aura:attribute name="showB2CSection3" type="Boolean" default="false"/>
    <aura:attribute name="showCaseAction" type="Boolean" default="false"/>
    <aura:attribute name="menuSelectedItem" type="String" default="Persona Natural"/>
    <aura:attribute name="Spinner" type="Boolean" default="true"/>
    <aura:attribute name="recordTypesInput" type="Map" default="{CON_B2C:'',CON_B2B:'',ACC_B2C:'',ACC_B2B:''}" />
    <aura:attribute name="accountParam" type="String" />
    <aura:attribute name="ownerParam" type="String"/>
    <aura:attribute name="applicantParam" type="String" />
    <aura:attribute name="legalRepParam" type="String"/>
    <aura:attribute name="NaturalParam" type="String"/>
    <aura:attribute type="Contact" name="newContact" /><!--1/17/2020-->
    <!--error-->
    <aura:attribute name="error" type="Boolean"/>
    <!--error1-->
    <aura:attribute name="error1" type="Boolean"/>
    <!--error2-->
    <aura:attribute name="error2" type="Boolean"/>
    <!--error3-->
    <aura:attribute name="error3" type="Boolean"/>
    <!--error4-->
    <aura:attribute name="error4" type="Boolean"/>
    <!--error5-->
    <aura:attribute name="error5" type="Boolean"/>
    <!--error6-->
    <aura:attribute name="error6" type="Boolean"/>
     <!--error7-->
    <aura:attribute name="error7" type="Boolean"/>
     <!--error7-->
    <aura:attribute name="error8" type="Boolean"/>
    <aura:handler event="aura:waiting" action="{!c.showSpinner}"/>
    <aura:handler event="aura:doneWaiting" action="{!c.hideSpinner}"/>
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>


    
    <lightning:quickActionAPI aura:id="quickActionAPI" />
    
    <aura:if isTrue="{!v.Spinner}">
        <lightning:spinner
                           alternativeText="Loading"
                           size="medium"
                           style="padding-top:100px"
                           />
    </aura:if>
  <!--Error message for empty field-->
    <aura:if isTrue="{!v.error}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">Debe seleccionar algún valor para los campos
                        resaltados en rojo.</h2>
                </div>
            </div>
        </div>
    </aura:if>
    <!--error message for Identity Number format--> 
    <aura:if isTrue="{!v.error1}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error1</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">Ingresar un número de identidad válido. Sin puntos y con guión.</h2>
                </div>
            </div>
        </div>
    </aura:if>
    <!--error message for invalid phone format-->
       <aura:if isTrue="{!v.error2}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error2</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">Ingresar teléfono válido. Debe contener 9 dígitos numéricos. Para celulares: 9XXXXXXXX. Para red fija: 52XXXXXXX</h2>
                </div>
            </div>
        </div>
    </aura:if>
    <!--error message for invalid Name format-->
    <aura:if isTrue="{!v.error3}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error3</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">Ingresar un valor válido para el nombre y apellido Paterno. Debe tener al menos 3 caracteres.</h2>
                </div>
            </div>
        </div>
    </aura:if>
     <!--error message for repeated identity number-->
    <aura:if isTrue="{!v.error4}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error4</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">El número de identidad ingresado ya existe en el sistema</h2>
                </div>
            </div>
        </div>
    </aura:if>
     <!--error message for the phone does not have the correct format-->
    <aura:if isTrue="{!v.error5}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error5</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">El telefono móvil no tiene el formato correcto. Debe contener 9 dígitos numéricos. Ej: 9XXXXXXXX. </h2>
                </div>
            </div>
        </div>
    </aura:if>
     <!--error message for Invalid account name-->
    <aura:if isTrue="{!v.error6}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error6</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">Ingresar un valor válido para el nombre de la cuenta. Debe tener al menos 3 caracteres</h2>
                </div>
            </div>
        </div>
    </aura:if>
     <!--error message for Identidad repetida-->
    <aura:if isTrue="{!v.error7}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error7</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">Ingresar un email principal válido para el contacto</h2>
                </div>
            </div>
        </div>
    </aura:if>
      <!--error message for Identidad repetida-->
    <aura:if isTrue="{!v.error8}">
        <div class="slds-notify_container slds-is-relative">
            <div class="slds-notify slds-notify_toast slds-theme_error" role="status">
                <span class="slds-assistive-text">error8</span>
                <div class="slds-notify__content">
                    <h2 class="slds-text-heading_small ">Ingresar un email principal válido</h2>
                </div>
            </div>
        </div>
    </aura:if>
    <aura:if isTrue="{!v.showCaseAction}">
        <c:CNT_LCMP013_NewContractCase sObjectName='Contact' recordId='{!v.applicantParam}'  contactId='{!v.applicantParam}'
                                       contactOwnerId='{!v.ownerParam}' accountContactLegalReprecentId='{!v.legalRepParam}'
                                       natJurValue='{!v.NaturalParam}' isInApp='true'/>
        <aura:set attribute="else">
            <lightning:layout multipleRows="true">
                <lightning:layoutItem size="2" padding="around-small">
                    <ui:outputText value="Seleccionar el tipo de Cuenta"/>
                </lightning:layoutItem>
                <lightning:layoutItem size="2" alignmentBump="left">
                    <lightning:buttonMenu alternativeText="Seleccionar el tipo de Cuenta" onselect="{! c.handleSelect }">
                        <lightning:menuItem label="Persona Natural" value="Persona Natural" iconName="utility:add_contact"/>
                        <lightning:menuItem label="Persona Jurídica" value="Persona Jurídica" iconName="utility:add_contact"/>

                    </lightning:buttonMenu>
                </lightning:layoutItem>
                <lightning:layoutItem size="8" padding="around-small" alignmentBump="left">
                    <ui:outputText value="{!v.menuSelectedItem}"/>
                </lightning:layoutItem>
            </lightning:layout>
            <aura:if isTrue="{!v.showB2CSection}">
                <lightning:accordion
                                     allowMultipleSectionsOpen="true"        
                                     activeSectionName="{! v.activeSections }">
                    <lightning:accordionSection name="A" label="Datos de la Cuenta" class="slds-hide">
                        <c:CNT_LCMP018_NewAccountB2C aura:id="cmpAccB2c" recordTypeId="{!v.recordTypesInput.ACC_B2C}"/>
                    </lightning:accordionSection>
                    <lightning:accordionSection name="B" label="Datos del Contacto">
                        <div class="slds-grid slds-wrap slds-gutters slds-gutters_x-small slds-grid_pull-padded-x-small componentReferenceExamples">
                            <div class="example-box-container slds-col slds-size_1-of-1 slds-medium-size_1-of-1">
                                <div class="slds-box example-box">
                                    <lightning:layout>
                                        <lightning:layoutItem alignmentBump="Right"><ui:outputText value="Datos del Contacto"/></lightning:layoutItem>
                                        <lightning:layoutItem alignmentBump="left"><lightning:input type="checkbox" name="Solicitante" label="Solicitante"  aura:id="Solicitante1" class="" checked="true" disabled="true" /></lightning:layoutItem>
                                        <lightning:layoutItem ><lightning:input type="checkbox" name="Propietario" label="Propietario"  aura:id="Propietario1" class="" checked="true" onchange="{!c.onCheck}"/> </lightning:layoutItem>
                                    </lightning:layout>
                                    <c:CNT_LCMP020_NewContactB2C aura:id="cmpB2c" recordTypeId="{!v.recordTypesInput.CON_B2C}"/>
                                </div>
                                <aura:if isTrue="{!v.showB2CSection2}">
                                    <div class="slds-box example-box">
                                        <lightning:layout>
                                            <lightning:layoutItem alignmentBump="Right"><ui:outputText value="Datos del Contacto"/></lightning:layoutItem>
                                            <lightning:layoutItem alignmentBump="left"><lightning:input type="checkbox" name="Solicitante" label="Solicitante"  aura:id="Solicitante2" class="" checked="false" disabled="true" /></lightning:layoutItem>
                                            <lightning:layoutItem ><lightning:input type="checkbox" name="Propietario" label="Propietario"  aura:id="Propietario2" class="" checked="true" disabled="true"/> </lightning:layoutItem>
                                        </lightning:layout>
                                        <c:CNT_LCMP020_NewContactB2C aura:id="cmpB2c2" recordTypeId="{!v.recordTypesInput.CON_B2C}"/>
                                    </div>
                                </aura:if>
                            </div>
                        </div>
                    </lightning:accordionSection>
                </lightning:accordion>
                <aura:set attribute="else">
                    <lightning:accordion
                                         allowMultipleSectionsOpen="true"        
                                         activeSectionName="{! v.activeSections }">
                        <lightning:accordionSection name="A" label="Datos de la Cuenta">
                            <c:CNT_LCMP019_NewAccountB2B aura:id="cmpAccB2b" recordTypeId="{!v.recordTypesInput.ACC_B2B}"/>
                        </lightning:accordionSection>
                        <lightning:accordionSection name="B" label="Datos del Contacto">
                            <div class="slds-grid slds-wrap slds-gutters slds-gutters_x-small slds-grid_pull-padded-x-small componentReferenceExamples">
                                <div class="example-box-container slds-col slds-size_1-of-1 slds-medium-size_1-of-1">
                                    <div class="slds-box example-box">
                                        <lightning:layout>
                                            <lightning:layoutItem alignmentBump="Right"><ui:outputText value="Datos del Contacto"/></lightning:layoutItem>
                                            <lightning:layoutItem alignmentBump="left"><lightning:input type="checkbox" name="Solicitante" label="Solicitante"  aura:id="SolicitanteElse1" class="" checked="true" disabled="true"/></lightning:layoutItem>
                                            <lightning:layoutItem ><lightning:input type="checkbox" name="Propietario" label="Propietario"  aura:id="PropietarioElse1" class="" checked="true" onchange="{!c.onCheckElse}"/> </lightning:layoutItem>
                                            <lightning:layoutItem ><lightning:input type="checkbox" name="Representante" label="Representante"  aura:id="RepresentanteElse1" class="" checked="true" onchange="{!c.onCheckElse}"/> </lightning:layoutItem>
                                        </lightning:layout>
                                        <c:CNT_LCMP020_NewContactB2B aura:id="cmpB2b" recordTypeId="{!v.recordTypesInput.CON_B2B}"/>
                                    </div>
                                    <aura:if isTrue="{!v.showB2CSection2}">
                                        <div class="slds-box example-box">
                                            <lightning:layout>
                                                <lightning:layoutItem alignmentBump="Right"><ui:outputText value="Datos del Contacto"/></lightning:layoutItem>
                                                <lightning:layoutItem alignmentBump="left"><lightning:input type="checkbox" name="Solicitante" label="Solicitante"  aura:id="SolicitanteElse2" class="" checked="false" disabled="true" /></lightning:layoutItem>
                                                <lightning:layoutItem ><lightning:input type="checkbox" name="Propietario" label="Propietario"  aura:id="PropietarioElse2" class="" checked="true" disabled="true"/> </lightning:layoutItem>
                                                <lightning:layoutItem ><lightning:input type="checkbox" name="Representante" label="Representante"  aura:id="RepresentanteElse2" class="" checked="true" onchange="{!c.onCheckSection2}"/> </lightning:layoutItem>
                                            </lightning:layout>
                                            <c:CNT_LCMP020_NewContactB2B aura:id="cmpB2b2" recordTypeId="{!v.recordTypesInput.CON_B2B}"/>
                                        </div>
                                    </aura:if>
                                    <aura:if isTrue="{!v.showB2CSection3}">
                                        <div class="slds-box example-box">
                                            <lightning:layout>
                                                <lightning:layoutItem alignmentBump="Right"><ui:outputText value="Datos del Contacto"/></lightning:layoutItem>
                                                <lightning:layoutItem alignmentBump="left"><lightning:input type="checkbox" name="Solicitante" label="Solicitante"  aura:id="SolicitanteElse3" class="" checked="false" disabled="true" /></lightning:layoutItem>
                                                <lightning:layoutItem ><lightning:input type="checkbox" name="Propietario" label="Propietario"  aura:id="PropietarioElse3" class="" checked="false" disabled="true"/> </lightning:layoutItem>
                                                <lightning:layoutItem ><lightning:input type="checkbox" name="Representante" label="Representante"  aura:id="RepresentanteElse3" class="" checked="true" disabled="true"/> </lightning:layoutItem>
                                            </lightning:layout>
                                            <c:CNT_LCMP020_NewContactB2B aura:id="cmpB2b3" recordTypeId="{!v.recordTypesInput.CON_B2B}"/>
                                        </div>
                                    </aura:if>
                                </div>
                            </div>
                        </lightning:accordionSection>
                    </lightning:accordion>
                </aura:set>
            </aura:if>
            <div class="slds-align_absolute-center slds-p-top_x-small">
                <lightning:button class="slds-button slds-button--neutral" label="Guardar" title="Guardar"
                                  onclick="{! c.saveProcess }"/>
            </div>
        </aura:set>
    </aura:if>
</aura:application>