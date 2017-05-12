({"optimize":"uglify2","preserveLicenseComments":true,"paths":{"require-config":"..\/js\/require-config","require-lib":"ororequirejs\/lib\/require"},"baseUrl":".\/bundles","out":".\/js\/oro.min.js","mainConfigFile":".\/js\/require-config.js","include":["require-config","require-lib","oro\/form\/system\/config","oro\/form\/system\/config\/system","oro\/form\/system\/config\/group\/localization","oro\/form\/system\/config\/group\/notification","oro\/form\/system\/config\/save","text!oro\/template\/system\/config","text!oro\/template\/system\/tab\/system","text!oro\/template\/system\/group\/localization","text!oro\/template\/system\/group\/notification","jquery.form","url","oro\/navigation\/collection","oro\/navigation\/model","pim\/data-collector","pim\/patch-fetcher","pim\/dashboard\/abstract-widget","pim\/dashboard\/completeness-widget","pim\/dashboard\/last-operations-widget","pim\/dashboard\/widget-container","text!pim\/dashboard\/template\/completeness-widget","text!pim\/dashboard\/template\/last-operations-widget","text!pim\/dashboard\/template\/view-all-btn","oro\/datagrid\/tab-redirect-action","pim\/datagrid\/configure-columns-action","oro\/export-widget","pim\/datagrid\/state","pim\/datagrid\/state-listener","pim\/datagrid\/column-form-listener","oro\/datagrid\/action-launcher","oro\/datagrid\/abstract-action","oro\/datagrid\/delete-action","oro\/datagrid\/ajax-action","oro\/datagrid\/mass-action","oro\/datagrid\/model-action","oro\/datagrid\/navigate-action","oro\/datagrid\/refresh-collection-action","oro\/datagrid\/reset-collection-action","oro\/datagrid\/actions-panel","oro\/datagrid\/action-column","oro\/datagrid\/body","oro\/datagrid\/action-cell","oro\/datagrid\/boolean-cell","oro\/datagrid\/html-cell","oro\/datagrid\/date-cell","oro\/datagrid\/datetime-cell","oro\/datagrid\/number-cell","oro\/datagrid\/integer-cell","oro\/datagrid\/select-cell","oro\/datagrid\/select-row-cell","oro\/datagrid\/string-cell","oro\/datagrid\/cell-formatter","oro\/datagrid\/grid","oro\/datagrid\/header-cell","oro\/datagrid\/select-all-header-cell","oro\/datagrid\/header","oro\/datagrid\/abstract-listener","oro\/datagrid\/column-form-listener","oro\/datagrid\/callback-listener","oro\/datagrid\/page-size","oro\/datagrid\/grid-views\/view","oro\/datagrid\/grid-views\/model","oro\/datagrid\/grid-views\/collection","oro\/datagrid\/pagination-input","oro\/datagrid\/pagination","oro\/datagrid\/row","oro\/datagrid\/toolbar","oro\/datagrid-builder","oro\/loading-mask","oro\/pageable-collection","backbone\/pageable-collection","backgrid","jquery.multiselect","jquery.multiselect.filter","oro\/multiselect-decorator","oro\/datafilter\/price-filter","oro\/datafilter\/metric-filter","oro\/datafilter\/product_scope-filter","oro\/datafilter\/product_category-filter","oro\/datafilter\/product_completeness-filter","oro\/datafilter\/ajax-choice-filter","oro\/datafilter\/select2-choice-filter","oro\/datafilter\/select2-rest-choice-filter","oro\/datafilter\/abstract-filter","oro\/datafilter\/none-filter","oro\/datafilter\/choice-filter","oro\/datafilter\/date-filter","oro\/datafilter\/datetime-filter","oro\/datafilter\/multiselect-filter","oro\/datafilter\/number-filter","oro\/datafilter\/select-filter","oro\/datafilter\/select-row-filter","oro\/datafilter\/text-filter","oro\/datafilter\/abstract-formatter","oro\/datafilter\/filters-manager","oro\/datafilter\/collection-filters-manager","oro\/datafilter-builder","pim\/datagrid-view-fetcher","pim\/saver\/datagrid-view","pim\/remover\/datagrid-view","text!pim\/template\/datagrid\/action-launcher-button","text!pim\/template\/datagrid\/action-launcher-list-item","text!pim\/template\/datagrid\/actions-group","text!pim\/template\/datagrid\/configure-columns-action","text!pim\/template\/datagrid\/filter\/select2-choice-filter","text!pim\/template\/datagrid\/filter\/date-filter","text!pim\/template\/datagrid\/filter\/metric-filter","pim\/app","pim\/router","pim\/route-matcher","pim\/page-title","pim\/init-translator","pim\/controller-registry","pim\/controller\/base","pim\/controller\/template","pim\/controller\/form","pim\/controller\/product","pim\/controller\/family","pim\/controller\/channel\/edit","pim\/controller\/common\/index","pim\/controller\/association-type","pim\/controller\/redirect","pim\/controller\/job-instance","pim\/controller\/group","pim\/controller\/variant-group","pim\/controller\/role","pim\/controller\/job-execution","pim\/controller\/group-type","pim\/controller\/system","pim\/controller\/user","jquery.wizard","jstree\/jquery.jstree.tree_selector","jstree\/nested_switch","pim\/init","pim\/asynctab","pim\/popinform","pim\/optionform","pim\/form-modal","pim\/scopable","pim\/currencyfield","pim\/tree\/view","pim\/tree\/associate","pim\/tree\/manage","pim\/attributeoptionview","pim\/item\/tableview","pim\/item\/view","pim\/i18n","pim\/user-context","pim\/date-context","pim\/error","translator","oro\/translator","pim\/common\/property","pim\/security-context","pim\/product-manager","pim\/variant-group-manager","pim\/group-manager","pim\/attribute-manager","pim\/attribute-group-manager","pim\/fetcher-registry","pim\/base-fetcher","pim\/attribute-fetcher","pim\/attribute-group-fetcher","pim\/locale-fetcher","pim\/completeness-fetcher","pim\/product-fetcher","pim\/variant-group-fetcher","pim\/remover\/base","pim\/remover\/association-type","pim\/remover\/group-type","pim\/remover\/channel","pim\/remover\/family","pim\/remover\/product","pim\/remover\/variant-group","pim\/remover\/group","pim\/remover\/job-instance-import","pim\/remover\/job-instance-export","pim\/saver\/base","pim\/saver\/entity-saver","pim\/saver\/channel","pim\/saver\/family","pim\/saver\/product","pim\/saver\/variant-group","pim\/saver\/group","pim\/saver\/job-instance-export","pim\/saver\/job-instance-import","pim\/media-url-generator","pim\/form-builder","pim\/form-registry","pim\/form-config-provider","pim\/cache-invalidator","pim\/association-type-edit-form\/delete","pim\/group-type-edit-form\/delete","pim\/channel-edit-form\/delete","pim\/channel-edit-form\/save","pim\/channel-edit-form\/properties\/general","pim\/channel-edit-form\/properties\/general\/currencies","pim\/channel-edit-form\/properties\/general\/locales","pim\/channel-edit-form\/properties\/conversion-unit","pim\/family-edit-form\/delete","pim\/family-edit-form\/save","pim\/family-edit-form\/properties\/general\/code","pim\/family-edit-form\/properties\/general\/attribute-as-label","pim\/family-edit-form\/properties\/general\/translation","pim\/family-edit-form\/attributes\/toolbar\/add-select\/attribute-group","pim\/family-edit-form\/attributes\/attributes","pim\/family-edit-form\/attributes\/toolbar\/add-select\/attribute","pim\/family-edit-form\/attributes\/toolbar","pim\/family-edit-form\/properties\/general","pim\/family-edit-form\/attributes","pim\/variant-group-edit-form\/save","pim\/job-instance-edit-form\/save","pim\/job-instance-export-edit-form\/save","pim\/job-instance-import-edit-form\/save","pim\/group-edit-form\/save","pim\/product-edit-form\/product-label","pim\/product-edit-form\/attributes\/validation","pim\/product-edit-form\/attributes\/validation-error","pim\/product-edit-form\/attributes\/variant-group","pim\/product-edit-form\/attributes\/locale-specific","pim\/product-edit-form\/attributes\/completeness","pim\/product-edit-form\/attributes\/localizable","pim\/product-edit-form\/categories","pim\/product-edit-form\/associations","pim\/product-edit-form\/panel\/panels","pim\/product-edit-form\/panel\/selector","pim\/product-edit-form\/locale-switcher","pim\/product-edit-form\/scope-switcher","pim\/product-edit-form\/panel\/completeness","pim\/product-edit-form\/panel\/history","pim\/product-edit-form\/panel\/comments","pim\/product-edit-form\/save","pim\/product-edit-form\/save-and-back","pim\/product-edit-form\/sequential-edit","pim\/product-edit-form\/delete","pim\/product-edit-form\/meta\/family","pim\/product-edit-form\/meta\/change-family","pim\/product-edit-form\/meta\/groups","pim\/product-edit-form\/status-switcher","pim\/product-edit-form\/download-pdf","pim\/product-edit-form\/attributes","pim\/job\/product\/edit\/content\/readonly","pim\/job\/product\/edit\/content\/structure\/scope","pim\/job\/product\/edit\/content\/structure\/locales","pim\/job\/product\/edit\/content\/structure\/attributes","pim\/job\/product\/edit\/content\/structure\/attributes-selector","pim\/job\/product\/edit\/content\/structure","pim\/job\/product\/edit\/content\/data\/add-select\/attribute","pim\/job\/product\/edit\/content\/data\/default-attribute-filters","pim\/job\/common\/edit\/content\/data\/help","pim\/job\/product\/edit\/content\/data","pim\/job\/product\/edit\/field\/date-format","pim\/job\/common\/edit\/field\/decimal-separator","pim\/job\/common\/edit\/properties","pim\/job\/common\/edit\/field\/field","pim\/job\/common\/edit\/field\/text","pim\/job\/common\/edit\/field\/select","pim\/job\/common\/edit\/field\/switch","pim\/job\/common\/edit\/label","pim\/job\/common\/edit\/meta","pim\/job\/export\/edit\/delete","pim\/job\/import\/edit\/delete","pim\/job\/common\/edit\/validation","pim\/job\/common\/edit\/launch","pim\/job\/common\/edit\/upload","pim\/job\/common\/edit\/upload-launch","pim\/job\/common\/label","pim\/job\/execution\/summary-table","pim\/job\/execution\/auto-refresh","pim\/job\/execution\/show-profile","pim\/job\/execution\/download-archives-buttons","pim\/job\/execution\/download-log","pim\/job\/product\/edit\/content","pim\/filter\/filter","pim\/filter\/product\/family","pim\/filter\/product\/enabled","pim\/filter\/product\/updated","pim\/filter\/product\/completeness","pim\/filter\/product\/category","pim\/filter\/product\/category\/selector","pim\/filter\/attribute\/identifier","pim\/filter\/attribute\/attribute","pim\/filter\/attribute\/boolean","pim\/filter\/attribute\/string","pim\/filter\/attribute\/metric","pim\/filter\/attribute\/price-collection","pim\/filter\/attribute\/number","pim\/filter\/attribute\/select","pim\/filter\/attribute\/media","pim\/filter\/attribute\/date","pim\/filter\/text","pim\/field-manager","pim\/provider\/to-fill-field-provider","pim\/product-create","pim\/product-create-form","pim\/mass-product-edit-form\/hidden-field-updater","pim\/mass-product-edit-form\/attributes","pim\/mass-family-edit-form\/attributes","pim\/mass-family-edit-form\/hidden-field-updater","pim\/mass-family-edit-form\/toolbar\/add-select\/attribute","pim\/attribute-option-form","pim\/attribute-option\/create","pim\/variant-group-edit-form\/delete","pim\/variant-group-edit-form\/no-attribute","pim\/variant-group-edit-form\/properties\/general","pim\/variant-group-edit-form\/add-select\/attribute","pim\/group-edit-form\/products","pim\/group-edit-form\/delete","pim\/group-edit-form\/properties\/general","pim\/group-edit-form\/meta\/product-count","pim\/common\/grid","pim\/common\/redirect","pim\/common\/column-list-view","pim\/common\/tab\/history","pim\/common\/tab\/properties","pim\/common\/properties\/translation","pim\/common\/properties\/general","pim\/common\/add-select\/line","pim\/common\/add-select\/footer","pim\/common\/add-select","pim\/form\/common\/edit-form","pim\/form\/common\/label","pim\/form\/common\/group-selector","pim\/form\/common\/attributes\/attribute-group-selector","pim\/form\/common\/save","pim\/form\/common\/delete","pim\/form\/common\/back-to-grid","pim\/form\/common\/form-tabs","pim\/form\/common\/save-form","pim\/form\/common\/save-buttons","pim\/form\/common\/state","pim\/form\/common\/meta\/created","pim\/form\/common\/meta\/updated","pim\/form\/common\/meta\/status","pim\/form\/common\/attributes","pim\/form\/common\/attributes\/copy","pim\/form\/common\/attributes\/copy-field","pim\/form\/common\/attributes\/create-button","pim\/form\/common\/download-file","pim\/form\/common\/index\/index","pim\/form\/common\/index\/grid","pim\/form\/common\/index\/create-button","pim\/form\/common\/index\/confirm-button","pim\/menu\/menu","pim\/menu\/tab","pim\/menu\/item","pim\/header\/header","pim\/header\/logo","pim\/header\/user","pim\/field","pim\/boolean-field","pim\/date-field","pim\/media-field","pim\/metric-field","pim\/multi-select-field","pim\/number-field","pim\/price-collection-field","pim\/simple-select-field","pim\/text-field","pim\/textarea-field","pim\/wysiwyg-field","pim\/product\/add-select\/attribute\/line","pim\/product\/add-select\/attribute","pim\/formatter\/choices\/base","pim\/formatter\/date","pim\/grid\/view-selector\/selector","pim\/grid\/view-selector\/line","pim\/grid\/view-selector\/create-view","pim\/grid\/view-selector\/save-view","pim\/grid\/view-selector\/remove-view","pim\/grid\/view-selector\/current","text!pim\/template\/form\/group-selector","text!pim\/template\/form\/save","text!pim\/template\/form\/delete","text!pim\/template\/form\/tab\/history","text!pim\/template\/form\/tab\/properties","text!pim\/template\/form\/tab\/section","text!pim\/template\/form\/grid","text!pim\/template\/form\/add-select\/select","text!pim\/template\/form\/add-select\/line","text!pim\/template\/form\/add-select\/footer","text!pim\/template\/form\/properties\/translation","text!pim\/template\/form\/properties\/general","text!pim\/template\/form\/properties\/input","text!pim\/template\/form\/back-to-grid","text!pim\/template\/form\/form-tabs","text!pim\/template\/form\/state","text!pim\/template\/form\/meta\/created","text!pim\/template\/form\/meta\/updated","text!pim\/template\/form\/meta\/status","text!pim\/template\/form\/tab\/attributes","text!pim\/template\/form\/save-buttons","text!pim\/template\/form\/edit-form","text!pim\/template\/form\/tab\/attribute\/attribute-group-selector","text!pim\/template\/form\/tab\/attribute\/copy","text!pim\/template\/form\/tab\/attribute\/copy-field","text!pim\/template\/form\/tab\/attribute\/create-button","text!pim\/template\/form\/tab\/attribute\/create-modal-content","text!pim\/template\/form\/redirect","text!pim\/template\/form\/download-file","text!pim\/template\/form\/index\/index","text!pim\/template\/form\/index\/create-button","text!pim\/template\/form\/index\/confirm-button","text!pim\/template\/channel\/tab\/properties\/general\/currencies","text!pim\/template\/channel\/tab\/properties\/general\/locales","text!pim\/template\/channel\/tab\/properties\/general\/category-tree","text!pim\/template\/channel\/tab\/properties\/conversion-unit","text!pim\/template\/channel\/tab\/properties\/general","text!pim\/template\/family\/tab\/attributes\/toolbar","text!pim\/template\/family\/tab\/attributes\/attributes","text!pim\/template\/family\/tab\/general\/attribute-as-label","text!pim\/template\/family\/tab\/attributes","text!pim\/template\/product\/tab\/categories","text!pim\/template\/product\/tab\/attribute\/validation-error","text!pim\/template\/product\/tab\/attribute\/variant-group","text!pim\/template\/product\/tab\/associations","text!pim\/template\/product\/tab\/association-panes","text!pim\/template\/product\/panel\/container","text!pim\/template\/product\/panel\/selector","text!pim\/template\/product\/panel\/completeness","text!pim\/template\/product\/panel\/history","text!pim\/template\/product\/panel\/comments","text!pim\/template\/product\/locale-switcher","text!pim\/template\/product\/sequential-edit","text!pim\/template\/product\/status-switcher","text!pim\/template\/product\/download-pdf","text!pim\/template\/product\/meta\/family","text!pim\/template\/product\/meta\/change-family-modal","text!pim\/template\/product\/meta\/groups","text!pim\/template\/product\/meta\/group-modal","text!pim\/template\/product\/scope-switcher","text!pim\/template\/product\/field\/field","text!pim\/template\/product\/field\/boolean","text!pim\/template\/product\/field\/date","text!pim\/template\/product\/field\/media","text!pim\/template\/product\/field\/metric","text!pim\/template\/product\/field\/multi-select","text!pim\/template\/product\/field\/number","text!pim\/template\/product\/field\/price-collection","text!pim\/template\/product\/field\/simple-select","text!pim\/template\/product\/field\/text","text!pim\/template\/product\/field\/textarea","text!pim\/template\/product-create-popin","text!pim\/template\/product-create-error","text!pim\/template\/product\/add-select\/attribute\/line","text!pim\/template\/attribute-option\/form","text!pim\/template\/attribute-option\/validation-error","text!pim\/template\/attribute-option\/index","text!pim\/template\/attribute-option\/edit","text!pim\/template\/attribute-option\/show","text!pim\/template\/i18n\/flag","text!pim\/template\/error\/error","text!pim\/template\/menu\/tab","text!pim\/template\/menu\/item","text!pim\/template\/header\/header","text!pim\/template\/header\/logo","text!pim\/template\/header\/user","text!pim\/template\/app","text!pim\/template\/header\/flash","text!pim\/template\/variant-group\/tab\/properties\/general","text!pim\/template\/variant-group\/form\/no-attribute","text!pim\/template\/group\/tab\/properties\/general","text!pim\/template\/group\/meta\/product-count","text!pim\/template\/export\/product\/edit\/content\/data\/help","text!pim\/template\/export\/product\/edit\/content\/data","text!pim\/template\/export\/product\/edit\/content\/structure\/scope","text!pim\/template\/export\/product\/edit\/content\/structure\/locales","text!pim\/template\/export\/product\/edit\/content\/structure\/attributes","text!pim\/template\/export\/product\/edit\/content\/structure\/attributes-selector","text!pim\/template\/export\/product\/edit\/content\/structure\/attribute-list","text!pim\/template\/export\/product\/edit\/content\/structure","text!pim\/template\/export\/common\/edit\/properties","text!pim\/template\/export\/common\/edit\/field\/field","text!pim\/template\/export\/common\/edit\/field\/text","text!pim\/template\/export\/common\/edit\/field\/select","text!pim\/template\/export\/common\/edit\/field\/switch","text!pim\/template\/export\/common\/edit\/meta","text!pim\/template\/export\/common\/edit\/validation","text!pim\/template\/export\/common\/edit\/launch","text!pim\/template\/export\/common\/edit\/upload","text!pim\/template\/export\/product\/edit\/content","text!pim\/template\/filter\/filter","text!pim\/template\/filter\/simpleselect","text!pim\/template\/filter\/product\/family","text!pim\/template\/filter\/product\/enabled","text!pim\/template\/filter\/product\/updated","text!pim\/template\/filter\/product\/completeness","text!pim\/template\/filter\/product\/category\/selector","text!pim\/template\/filter\/product\/category","text!pim\/template\/filter\/product\/identifier","text!pim\/template\/filter\/attribute\/boolean","text!pim\/template\/filter\/attribute\/string","text!pim\/template\/filter\/attribute\/metric","text!pim\/template\/filter\/attribute\/price-collection","text!pim\/template\/filter\/attribute\/number","text!pim\/template\/filter\/attribute\/select","text!pim\/template\/filter\/attribute\/media","text!pim\/template\/filter\/attribute\/date","text!pim\/template\/grid\/view-selector\/create-view-label-input","text!pim\/template\/grid\/view-selector\/line","text!pim\/template\/grid\/view-selector\/create-view","text!pim\/template\/grid\/view-selector\/save-view","text!pim\/template\/grid\/view-selector\/remove-view","text!pim\/template\/grid\/view-selector\/current","text!pim\/template\/grid\/view-selector","text!pim\/template\/job-execution\/summary-table","text!pim\/template\/job-execution\/auto-refresh","text!pim\/template\/job-execution\/download-archives-buttons","pim\/form","pim\/job-execution-view","pim\/indicator","pim\/notifications","pim\/notification-list","text!pim\/template\/notification\/notification","text!pim\/template\/notification\/notification-footer","text!pim\/template\/notification\/notification-list","pim\/reference-simple-select-field","pim\/reference-multi-select-field","text","json","base64","jquery","jquery-ui","jquery.numeric","jquery.select2","jquery.jstree","jstree\/jquery.hotkeys","bootstrap","underscore","backbone","backbone\/bootstrap-modal","oro\/app","oro\/error","oro\/init-layout","oro\/jquery-setup","oro\/layout","oro\/mediator","oro\/messenger","oro\/modal","oro\/delete-confirmation","oro\/tools","oro\/form\/state","jquery.slimbox","bootstrap.bootstrapswitch","bootstrap.datetimepicker","wysiwyg","datepicker","jquery.sidebarize","pim\/ui","pim\/initselect2","pim\/dialog","pim\/formupdatelistener","pim\/saveformstate","pim\/fileinput","pim\/dialogform","pim\/dropzonejs","pim\/form\/system\/config\/group\/loading-message","text!pim\/template\/system\/group\/loading-message"]})