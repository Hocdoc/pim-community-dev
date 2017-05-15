module.exports = {"pim/fetcher-registry":{"fetchers":{"ui-locale":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_localization_locale_index"}}},"user":{"module":"pim/base-fetcher","options":{"urls":{"get":"pim_user_user_rest_get"}}},"user_group":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_user_user_group_rest_index"}}},"datagrid-view":{"module":"pim/datagrid-view-fetcher","options":{"urls":{"list":"pim_datagrid_view_rest_index","get":"pim_datagrid_view_rest_get","columns":"pim_datagrid_view_rest_default_columns","userDefaultView":"pim_datagrid_view_rest_default_user_view"}}},"default":"pim/base-fetcher","association-type":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_associationtype_rest_index","get":"pim_enrich_associationtype_rest_get"}}},"group-type":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_grouptype_rest_index","get":"pim_enrich_grouptype_rest_get"}}},"attribute-group":{"module":"pim/attribute-group-fetcher","options":{"urls":{"list":"pim_enrich_attributegroup_rest_index"}}},"attribute":{"module":"pim/attribute-fetcher","options":{"identifier_type":"pim_catalog_identifier","urls":{"list":"pim_enrich_attribute_rest_index","get":"pim_enrich_attribute_rest_get"}}},"attribute-type":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_attribute_types_index"}}},"family":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_family_rest_index","get":"pim_enrich_family_rest_get"}}},"channel":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_channel_rest_index","get":"pim_enrich_channel_rest_get"}}},"locale":{"module":"pim/locale-fetcher","options":{"urls":{"list":"pim_enrich_locale_rest_index"}}},"measure":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_measures_rest_index"}}},"currency":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_currency_rest_index"}}},"group":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_group_rest_index","get":"pim_enrich_group_rest_get"}}},"variant-group":{"module":"pim/variant-group-fetcher","options":{"urls":{"list":"pim_enrich_variant_group_rest_index","get":"pim_enrich_variant_group_rest_get"}}},"sequential-edit":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_mass_edit_action_sequential_edit_get"}}},"product-history":{"module":"pim/base-fetcher","options":{"urls":{"get":"pim_enrich_product_history_rest_get"}}},"product":{"module":"pim/product-fetcher","options":{"urls":{"get":"pim_enrich_product_rest_get"}}},"category":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_enrich_category_rest_list","get":"pim_enrich_category_rest_get"}}},"job-instance-export":{"module":"pim/base-fetcher","options":{"urls":{"get":"pim_enrich_job_instance_rest_export_get"}}},"job-instance-import":{"module":"pim/base-fetcher","options":{"urls":{"get":"pim_enrich_job_instance_rest_import_get"}}},"formats":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_localization_format_index"}}},"user-group":{"module":"pim/base-fetcher","options":{"urls":{"list":"pim_user_user_group_rest_index"}}},"job-execution":{"module":"pim/base-fetcher","options":{"urls":{"get":"pim_enrich_job_execution_rest_get"}}},"reference-data-configuration":{"module":"pim/base-fetcher","options":{"warmup":false,"urls":{"list":"pim_reference_data_configuration_rest_get"}}}}},"oro/form/system/config/save":{"route":"oro_config_configuration_system_post"},"pim/saver/datagrid-view":{"url":"pim_datagrid_view_rest_save"},"pim/remover/datagrid-view":{"url":"pim_datagrid_view_rest_remove"},"pim/form/common/edit-form":{"forwarded-events":{"pim_enrich:form:field:extension:add":"pim_enrich:form:field:extension:add","pim_enrich:form:filter:extension:add":"pim_enrich:form:filter:extension:add","pim_enrich:form:entity:pre_save":"pim_enrich:form:entity:pre_save","pim_enrich:form:entity:bad_request":"pim_enrich:form:entity:bad_request","pim_enrich:form:entity:update_state":"pim_enrich:form:entity:update_state","pim_enrich:form:entity:post_fetch":"pim_enrich:form:entity:post_fetch"}},"pim/cache-invalidator":{"events":["pim_enrich:form:entity:post_fetch"]},"pim/job/product/edit/content":{"forwarded-events":{"pim_enrich:form:filter:extension:add":"pim_enrich:form:filter:extension:add"}},"pim/grid/view-selector/selector":{"forwarded-events":{"grid:product-grid:state_changed":"grid:product-grid:state_changed"}},"pim/variant-group-manager":{"urls":{"get":"pim_enrich_variant_group_rest_get"}},"pim/controller/group":{"fetcher":"group"},"pim/controller/variant-group":{"fetcher":"variant-group"},"pim/remover/association-type":{"url":"pim_enrich_associationtype_rest_remove"},"pim/remover/group-type":{"url":"pim_enrich_grouptype_rest_remove"},"pim/remover/channel":{"url":"pim_enrich_channel_rest_remove"},"pim/remover/family":{"url":"pim_enrich_family_rest_remove"},"pim/remover/variant-group":{"url":"pim_enrich_variant_group_rest_remove"},"pim/remover/group":{"url":"pim_enrich_group_rest_remove"},"pim/remover/product":{"url":"pim_enrich_product_rest_remove"},"pim/remover/job-instance-import":{"url":"pim_enrich_job_instance_rest_import_delete"},"pim/remover/job-instance-export":{"url":"pim_enrich_job_instance_rest_export_delete"},"pim/saver/channel":{"postUrl":"pim_enrich_channel_rest_post","putUrl":"pim_enrich_channel_rest_put"},"pim/saver/family":{"putUrl":"pim_enrich_family_rest_put"},"pim/saver/variant-group":{"url":"pim_enrich_variant_group_rest_post"},"pim/saver/product":{"url":"pim_enrich_product_rest_post"},"pim/saver/group":{"url":"pim_enrich_group_rest_post"},"pim/saver/job-instance-import":{"url":"pim_enrich_job_instance_rest_import_put"},"pim/saver/job-instance-export":{"url":"pim_enrich_job_instance_rest_export_put"},"pim/form/common/attributes/create-button":{"attribute_icons":{"pim_catalog_identifier":"asterisk","pim_catalog_text":"font","pim_catalog_textarea":"file-text-alt","pim_catalog_number":"sort-by-order","pim_catalog_price_collection":"money","pim_catalog_multiselect":"tags","pim_catalog_simpleselect":"tag","pim_catalog_file":"file","pim_catalog_image":"camera-retro","pim_catalog_boolean":"check","pim_catalog_date":"calendar","pim_catalog_metric":"beaker","pim_reference_data_multiselect":"tags","pim_reference_data_simpleselect":"tag"}},"pim/controller-registry":{"defaultController":{"module":"pim/controller/template"},"controllers":{"pim_enrich_associationtype_edit":{"module":"pim/controller/association-type","aclResourceId":"pim_enrich_associationtype_edit"},"pim_enrich_associationtype_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_associationtype_index","config":{"entity":"association-type"}},"pim_enrich_attribute_create":{"module":"pim/controller/form","aclResourceId":"pim_enrich_attribute_create"},"pim_enrich_attribute_edit":{"module":"pim/controller/form","aclResourceId":"pim_enrich_attribute_edit"},"pim_enrich_attributegroup_create":{"module":"pim/controller/form","aclResourceId":"pim_enrich_attributegroup_create"},"pim_enrich_attributegroup_edit":{"module":"pim/controller/form","aclResourceId":"pim_enrich_attributegroup_edit"},"pim_enrich_categorytree_create":{"module":"pim/controller/form","aclResourceId":"pim_enrich_product_category_create"},"pim_enrich_categorytree_edit":{"module":"pim/controller/form","aclResourceId":"pim_enrich_product_category_edit"},"pim_enrich_categorytree_index":{"module":"pim/controller/form","aclResourceId":"pim_enrich_product_category_list"},"pim_enrich_channel_edit":{"module":"pim/controller/channel/edit","aclResourceId":"pim_enrich_channel_edit"},"pim_enrich_channel_create":{"module":"pim/controller/channel/edit","aclResourceId":"pim_enrich_channel_create"},"pim_enrich_channel_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_channel_index","config":{"entity":"channel"}},"pim_enrich_grouptype_edit":{"module":"pim/controller/group-type","aclResourceId":"pim_enrich_grouptype_edit"},"pim_enrich_product_edit":{"module":"pim/controller/product"},"pim_enrich_group_edit":{"module":"pim/controller/group","aclResourceId":"pim_enrich_group_edit"},"pim_enrich_variant_group_edit":{"module":"pim/controller/variant-group","aclResourceId":"pim_enrich_variant_group_edit"},"pim_importexport_export_profile_index":{"module":"pim/controller/common/index","aclResourceId":"pim_importexport_export_profile_index","config":{"entity":"export-profile"}},"pim_importexport_import_profile_index":{"module":"pim/controller/common/index","aclResourceId":"pim_importexport_export_profile_index","config":{"entity":"import-profile"}},"pim_importexport_export_profile_edit":{"module":"pim/controller/job-instance","aclResourceId":"pim_importexport_export_profile_edit"},"pim_importexport_import_profile_edit":{"module":"pim/controller/job-instance","aclResourceId":"pim_importexport_import_profile_edit"},"pim_importexport_import_profile_show":{"module":"pim/controller/job-instance","aclResourceId":"pim_importexport_import_profile_show"},"pim_importexport_export_profile_show":{"module":"pim/controller/job-instance","aclResourceId":"pim_importexport_export_profile_show"},"pim_enrich_currency_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_currency_index","config":{"entity":"currency"}},"pim_enrich_currency_toggle":{"module":"pim/controller/redirect","aclResourceId":"pim_enrich_currency_toggle"},"pim_enrich_mass_edit_action_sequential_edit":{"module":"pim/controller/redirect"},"pim_enrich_mass_edit_product_action_choose":{"module":"pim/controller/form","aclResourceId":"pim_enrich_mass_edit"},"pim_enrich_mass_edit_product_action_configure":{"module":"pim/controller/form","aclResourceId":"pim_enrich_mass_edit"},"pim_enrich_mass_edit_product_action_perform":{"module":"pim/controller/form","aclResourceId":"pim_enrich_mass_edit"},"pim_enrich_family_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_family_index","config":{"entity":"family"}},"pim_enrich_family_create":{"module":"pim/controller/template","aclResourceId":"pim_enrich_family_create"},"pim_enrich_family_edit":{"module":"pim/controller/family","aclResourceId":"pim_enrich_family_index"},"pim_enrich_mass_edit_family_action_choose":{"module":"pim/controller/form"},"pim_enrich_mass_edit_family_action_configure":{"module":"pim/controller/form"},"pim_enrich_mass_edit_family_action_perform":{"module":"pim/controller/form"},"oro_user_index":{"module":"pim/controller/common/index","config":{"entity":"user"}},"oro_user_create":{"module":"pim/controller/form"},"oro_user_update":{"module":"pim/controller/user"},"oro_user_profile_update":{"module":"pim/controller/user"},"oro_user_role_index":{"module":"pim/controller/common/index","config":{"entity":"user-role"}},"oro_user_role_create":{"module":"pim/controller/form"},"oro_user_role_update":{"module":"pim/controller/role"},"oro_user_group_create":{"module":"pim/controller/form"},"oro_user_group_index":{"module":"pim/controller/common/index","config":{"entity":"user-group"}},"oro_user_group_update":{"module":"pim/controller/form"},"pim_enrich_mass_edit_action_choose":{"module":"pim/controller/form","aclResourceId":"pim_enrich_mass_edit_action_choose"},"pim_enrich_mass_edit_action_configure":{"module":"pim/controller/form","aclResourceId":"pim_enrich_mass_edit_action_configure"},"pim_importexport_import_profile_launch_upload":{"module":"pim/controller/redirect","aclResourceId":"pim_importexport_import_profile_launch_upload"},"pim_importexport_import_profile_launch":{"module":"pim/controller/redirect","aclResourceId":"pim_importexport_import_profile_launch"},"pim_importexport_import_profile_remove":{"module":"pim/controller/redirect","aclResourceId":"pim_importexport_import_profile_remove"},"pim_importexport_export_profile_launch":{"module":"pim/controller/redirect","aclResourceId":"pim_importexport_export_profile_launch"},"pim_importexport_export_profile_remove":{"module":"pim/controller/redirect","aclResourceId":"pim_importexport_export_profile_remove"},"pim_enrich_attributegroup_index":{"module":"pim/controller/template","aclResourceId":"pim_enrich_attributegroup_index"},"pim_enrich_attributegroup_sort":{"module":"pim/controller/template","aclResourceId":"pim_enrich_attributegroup_sort"},"pim_enrich_attributegroup_remove":{"module":"pim/controller/template","aclResourceId":"pim_enrich_attributegroup_remove"},"pim_enrich_locale_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_locale_index","config":{"entity":"locale"}},"pim_enrich_attribute_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_attribute_index","config":{"entity":"attribute"}},"pim_enrich_attribute_sort":{"module":"pim/controller/template","aclResourceId":"pim_enrich_attribute_sort"},"pim_enrich_attribute_remove":{"module":"pim/controller/template","aclResourceId":"pim_enrich_attribute_remove"},"pim_enrich_product_index":{"module":"pim/controller/template","aclResourceId":"pim_enrich_product_index"},"pim_enrich_product_create":{"module":"pim/controller/template","aclResourceId":"pim_enrich_product_create"},"pim_enrich_variant_group_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_variant_group_index","config":{"entity":"variant-group"}},"pim_enrich_variant_group_create":{"module":"pim/controller/template","aclResourceId":"pim_enrich_variant_group_create"},"pim_enrich_group_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_group_index","config":{"entity":"group"}},"pim_enrich_group_create":{"module":"pim/controller/template","aclResourceId":"pim_enrich_group_create"},"pim_enrich_group_history":{"module":"pim/controller/template","aclResourceId":"pim_enrich_group_history"},"pim_enrich_associationtype_create":{"module":"pim/controller/template","aclResourceId":"pim_enrich_associationtype_create"},"pim_enrich_grouptype_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_grouptype_index","config":{"entity":"group-type"}},"pim_enrich_grouptype_create":{"module":"pim/controller/template","aclResourceId":"pim_enrich_grouptype_create"},"pim_enrich_grouptype_remove":{"module":"pim/controller/template","aclResourceId":"pim_enrich_grouptype_remove"},"pim_enrich_job_tracker_index":{"module":"pim/controller/common/index","aclResourceId":"pim_enrich_job_tracker_index","config":{"entity":"process"}},"pim_importexport_import_execution_index":{"module":"pim/controller/common/index","aclResourceId":"pim_importexport_import_execution_index","config":{"entity":"import-execution"}},"pim_importexport_import_execution_show":{"module":"pim/controller/job-execution","aclResourceId":"pim_importexport_import_execution_show"},"pim_importexport_export_execution_index":{"module":"pim/controller/common/index","aclResourceId":"pim_importexport_export_execution_index","config":{"entity":"export-execution"}},"pim_importexport_export_execution_show":{"module":"pim/controller/job-execution","aclResourceId":"pim_importexport_export_execution_show"},"pim_enrich_job_tracker_show":{"module":"pim/controller/job-execution"},"oro_config_configuration_system":{"module":"pim/controller/system"}}}}