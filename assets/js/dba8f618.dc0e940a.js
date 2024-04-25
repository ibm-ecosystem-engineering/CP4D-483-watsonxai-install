"use strict";(self.webpackChunkcpd_watsonx_guide=self.webpackChunkcpd_watsonx_guide||[]).push([[22],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),u=s,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[p]="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(7462),s=(t(7294),t(3905));const o={sidebar_position:4},i="Installing IBM Cloud Pak for Data 4.8.4, watsonx.ai, watsonx.data, and watsonx governance using Cloud Pak Deployer",r={unversionedId:"install-cpd-watsonx",id:"install-cpd-watsonx",title:"Installing IBM Cloud Pak for Data 4.8.4, watsonx.ai, watsonx.data, and watsonx governance using Cloud Pak Deployer",description:"We'll use Cloud Pak Deployer to automate the install of the CPD platform (version 4.8.4) and watsonx.ai. The documentation can be found at:",source:"@site/docs/install-cpd-watsonx.md",sourceDirName:".",slug:"/install-cpd-watsonx",permalink:"/cp4d-483-watsonxai-install/install-cpd-watsonx",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Storage Validation Tool for IBM Cloud Paks",permalink:"/cp4d-483-watsonxai-install/k8s-storage-tests"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2}],d={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"installing-ibm-cloud-pak-for-data-484-watsonxai-watsonxdata-and-watsonx-governance-using-cloud-pak-deployer"},"Installing IBM Cloud Pak for Data 4.8.4, watsonx.ai, watsonx.data, and watsonx governance using Cloud Pak Deployer"),(0,s.kt)("p",null,"We'll use Cloud Pak Deployer to automate the install of the CPD platform (version 4.8.4) and watsonx.ai. The documentation can be found at: ",(0,s.kt)("a",{parentName:"p",href:"https://ibm.github.io/cloud-pak-deployer/"},"https://ibm.github.io/cloud-pak-deployer/")),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An existing OpenShift cluster with file and block storage and the compute required for IBM Cloud Pak for Data and watsonx.ai."),(0,s.kt)("li",{parentName:"ol"},"An IBM Entitlement Key: ",(0,s.kt)("a",{parentName:"li",href:"https://myibm.ibm.com/products-services/containerlibrary"},"https://myibm.ibm.com/products-services/containerlibrary"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"this is necessary for access to CPD and its cartridges (watsonx.ai)"))),(0,s.kt)("li",{parentName:"ol"},"A linux VM with the following:",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"podman: ",(0,s.kt)("a",{parentName:"li",href:"https://podman.io/docs/installation"},"https://podman.io/docs/installation")),(0,s.kt)("li",{parentName:"ol"},"git: sudo yum install git"),(0,s.kt)("li",{parentName:"ol"},"OpenShift CLI: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.14/cli_reference/openshift_cli/getting-started-cli.html"},"https://docs.openshift.com/container-platform/4.14/cli_reference/openshift_cli/getting-started-cli.html")))),(0,s.kt)("li",{parentName:"ol"},"Install the Node Feature Discovery Operator: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/openshift/23.9.1/install-nfd.html"},"https://docs.nvidia.com/datacenter/cloud-native/openshift/23.9.1/install-nfd.html")),(0,s.kt)("li",{parentName:"ol"},"Install the GPU Operator: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/install-gpu-ocp.html"},"https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/install-gpu-ocp.html"))),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"On your Linux VM, pull the code for Cloud Pak Deployer"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/IBM/cloud-pak-deployer.git\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Change into the ",(0,s.kt)("inlineCode",{parentName:"p"},"cloud-pak-deployer")," directory and build the image (takes roughly 5-10 minutes)"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd cloud-pak-deployer\n./cp-deploy.sh build\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Once the image is done building, make directories for our cpd configuration files and cpd status files"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir cpd-config\n\nmkdir cpd-status\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Change directories into cpd-config, copy the following yaml config file, and insert your information such as cluster and domain name:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd cpd-config\nmkdir config\ncd config\nvi ocp-existing-ocs.yaml\n")),(0,s.kt)("p",{parentName:"li"}," ocp-existing-ocs.yaml:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nglobal_config:\n  environment_name: <cluster_name>\n  cloud_platform: existing-ocp\n  env_id: watsonx\n  confirm_destroy: False\n\nopenshift:\n  - name: <cluster_name>\n    ocp_version: 4.14\n    cluster_name: <cluster_name>\n    domain_name: <domain_name>\n    gpu:\n      install: False\n    mcg:\n      install: False\n      storage_type: storage-class\n      storage_class: managed-nfs-storage\n    openshift_storage:\n      - storage_name: ocs-storage\n        storage_type: ocs\n# Optional parameters if you want to override the storage class used\n      # ocp_storage_class_file: nfs-client\n      # ocp_storage_class_block: nfs-client\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Copy the second yaml config file into the same directory:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vi cp4d-484.yaml\n")),(0,s.kt)("p",{parentName:"li"}," cp4d-483.yaml:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ncp4d:\n- project: cpd\n  openshift_cluster_name: <cluster-name>\n  cp4d_version: 4.8.4\n  cp4d_entitlement: cpd-enterprise           # or: cpd-standard, watsonx-ai, watsonx-data, watsonx-gov-model-management, watsonx-gov-risk-compliance\n  cp4d_production_license: True\n  accept_licenses: False\n  sequential_install: False\n  db2u_limited_privileges: False\n  use_fs_iam: True\n  operators_project: cpd-operators\n  cartridges:\n  - name: cp-foundation\n    license_service:\n      threads_per_core: 2\n  \n  - name: lite\n\n  - name: scheduler \n    state: removed\n    \n#\n# All tested cartridges. To install, change the "state" property to "installed". To uninstall, change the state\n# to "removed" or comment out the entire cartridge. Make sure that the "-" and properties are aligned with the lite\n# cartridge; the "-" is at position 3 and the property starts at position 5.\n#\n# If a cartridge has dependencies and you want to install it, you must ensure that the dependent cartridge is also\n# installed.\n#\n\n  - name: analyticsengine \n    description: Analytics Engine Powered by Apache Spark \n    size: small \n    state: removed\n\n  - name: bigsql\n    description: Db2 Big SQL\n    state: removed\n\n  - name: ca\n    description: Cognos Analytics\n    size: small\n    instances:\n    - name: ca-instance\n      metastore_ref: ca-metastore\n    state: removed\n\n  - name: dashboard\n    description: Cognos Dashboards\n    state: removed\n\n  - name: datagate\n    description: Db2 Data Gate\n    state: removed\n\n  - name: datastage-ent\n    description: DataStage Enterprise\n    state: removed\n\n  - name: datastage-ent-plus\n    description: DataStage Enterprise Plus\n    state: removed\n    # instances:\n    #   - name: ds-instance\n    #     # Optional settings\n    #     description: "datastage ds-instance"\n    #     size: medium\n    #     storage_class: efs-nfs-client\n    #     storage_size_gb: 60\n    #     # Custom Scale options\n    #     scale_px_runtime:\n    #       replicas: 2\n    #       cpu_request: 500m\n    #       cpu_limit: 2\n    #       memory_request: 2Gi\n    #       memory_limit: 4Gi\n    #     scale_px_compute:\n    #       replicas: 2\n    #       cpu_request: 1\n    #       cpu_limit: 3\n    #       memory_request: 4Gi\n    #       memory_limit: 12Gi    \n\n  - name: db2\n    description: Db2 OLTP\n    size: small\n    instances:\n    - name: ca-metastore\n      metadata_size_gb: 20\n      data_size_gb: 20\n      backup_size_gb: 20  \n      transactionlog_size_gb: 20\n    state: removed\n\n  - name: db2wh\n    description: Db2 Warehouse\n    state: removed\n\n  - name: dmc\n    description: Db2 Data Management Console\n    state: removed\n    instances:\n    - name: data-management-console\n      description: Data Management Console\n      size: medium\n      storage_size_gb: 50\n\n  - name: dods\n    description: Decision Optimization\n    size: small\n    state: removed\n\n  - name: dp\n    description: Data Privacy\n    size: small\n    state: removed\n\n  - name: dpra\n    description: Data Privacy Risk Assessment\n    state: removed\n\n  - name: dv\n    description: Data Virtualization\n    size: small \n    instances:\n    - name: data-virtualization\n    state: removed\n\n  # Please note that for EDB Postgress, a secret edb-postgres-license-key must be created in the vault\n  # before deploying\n  - name: edb_cp4d\n    description: EDB Postgres\n    state: removed\n    instances:\n    - name: instance1\n      version: "15.4"\n      #type: Standard\n      #members: 1\n      #size_gb: 50\n      #resource_request_cpu: 1\n      #resource_request_memory: 4Gi\n      #resource_limit_cpu: 1\n      #resource_limit_memory: 4Gi\n\n  - name: factsheet\n    description: AI Factsheets\n    size: small\n    state: installed\n\n  - name: hadoop\n    description: Execution Engine for Apache Hadoop\n    size: small\n    state: removed\n\n  - name: mantaflow\n    description: MANTA Automated Lineage\n    size: small\n    state: removed\n\n  - name: match360\n    description: IBM Match 360\n    size: small\n    wkc_enabled: true\n    state: removed\n\n  - name: openpages\n    description: OpenPages\n    state: installed\n\n  # For Planning Analytics, the case version is needed due to defect in olm utils\n  - name: planning-analytics\n    description: Planning Analytics\n    state: removed\n\n  - name: replication\n    description: Data Replication\n    license: IDRC\n    size: small\n    state: removed\n\n  - name: rstudio\n    description: RStudio Server with R 3.6\n    size: small\n    state: removed\n\n  - name: spss\n    description: SPSS Modeler\n    state: removed\n\n  - name: syntheticdata\n    description: Synthetic Data Generator\n    state: removed\n\n  - name: voice-gateway\n    description: Voice Gateway\n    replicas: 1\n    state: removed\n\n  - name: watson-assistant\n    description: Watson Assistant\n    size: small\n    # noobaa_account_secret: noobaa-admin\n    # noobaa_cert_secret: noobaa-s3-serving-cert\n    state: removed\n    instances:\n    - name: wa-instance\n      description: "Watson Assistant instance"\n\n  - name: watson-discovery\n    description: Watson Discovery\n    # noobaa_account_secret: noobaa-admin\n    # noobaa_cert_secret: noobaa-s3-serving-cert\n    state: removed\n    instances:\n    - name: wd-instance\n      description: "Watson Discovery instance"\n')))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  - name: watson-ks\n    description: Watson Knowledge Studio\n    size: small\n    # noobaa_account_secret: noobaa-admin\n    # noobaa_cert_secret: noobaa-s3-serving-cert\n    state: removed\n\n  - name: watson-openscale\n    description: Watson OpenScale\n    size: small\n    state: installed\n\n  - name: watson-speech\n    description: Watson Speech (STT and TTS)\n    stt_size: xsmall\n    tts_size: xsmall\n    # noobaa_account_secret: noobaa-admin\n    # noobaa_cert_secret: noobaa-s3-serving-cert\n    state: removed\n\n  # Please note that for watsonx.ai foundation models, you neeed to install the\n  # Node Feature Discovery and NVIDIA GPU operators. You can do so by setting the openshift.gpu.install property to True\n  - name: watsonx_ai\n    description: watsonx.ai\n    state: installed\n    models:\n    - model_id: google-flan-t5-xxl\n      state: removed\n    - model_id: google-flan-ul2\n      state: removed\n    - model_id: eleutherai-gpt-neox-20b\n      state: removed\n    - model_id: ibm-granite-13b-chat-v1\n      state: removed\n    - model_id: ibm-granite-13b-chat-v2\n      state: removed\n    - model_id: ibm-granite-13b-instruct-v1\n      state: removed\n    - model_id: ibm-granite-13b-instruct-v2\n      state: removed\n    - model_id: meta-llama-llama-2-70b-chat\n      state: removed\n    - model_id: ibm-mpt-7b-instruct2\n      state: removed\n    - model_id: bigscience-mt0-xxl\n      state: removed\n    - model_id: bigcode-starcoder\n      state: removed\n\n  - name: watsonx_data\n    description: watsonx.data\n    state: installed\n\n  - name: watsonx_governance\n    description: watsonx.governance\n    state: installed\n    installation_options:\n      installType: all\n      enableFactsheet: true\n      enableOpenpages: true\n      enableOpenscale: true\n\n  - name: watsonx_orchestrate\n    description: watsonx.orchestrate\n    state: removed\n\n  - name: wkc\n    description: Watson Knowledge Catalog\n    size: small\n    state: removed\n    installation_options:\n      install_wkc_core_only: False\n      enableKnowledgeGraph: False\n      enableDataQuality: False\n      enableFactSheet: False\n\n  - name: wml\n    description: Watson Machine Learning\n    size: small\n    state: installed\n\n  - name: wml-accelerator\n    description: Watson Machine Learning Accelerator\n    replicas: 1\n    size: small\n    state: removed\n\n  - name: ws\n    description: Watson Studio\n    state: installed\n\n  - name: ws-pipelines\n    description: Watson Studio Pipelines\n    state: removed\n\n  - name: ws-runtimes\n    description: Watson Studio Runtimes\n    runtimes:\n    - ibm-cpd-ws-runtime-py39\n    - ibm-cpd-ws-runtime-222-py\n    - ibm-cpd-ws-runtime-py39gpu\n    - ibm-cpd-ws-runtime-222-pygpu\n    - ibm-cpd-ws-runtime-231-pygpu\n    - ibm-cpd-ws-runtime-r36\n    - ibm-cpd-ws-runtime-222-r\n    - ibm-cpd-ws-runtime-231-r\n    state: removed \n\n#\n# Cartridges where extra work is needed (will not install automatically)\n# \n  # Product Master requires set up of the Db2 instance secret before install\n  - name: productmaster\n    description: Product Master\n    size: small  \n    state: removed\n```\n")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Set the environment variables for the newly created directories, IBM Entitlement Key, and cluster login (ensure the login is in double quotes)"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'export CONFIG_DIR=<ABSOLUTE_PATH>/cpd-config\nexport STATUS_DIR=<ABSOLUTE_PATH>/cpd-status\nexport CP_ENTITLEMENT_KEY=<IBM_ENTITLEMENT_KEY>\nexport CPD_OC_LOGIN="<YOUR_CLUSTER_LOGIN_COMMAND> --insecure-skip-tls-verify"\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run Cloud Pak Deployer (this will take roughly 1 to 2 hours)"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"./cp-deploy.sh env apply --accept-all-licenses\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You can check logs by running:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"./cp-deploy.sh env logs\n")))))}m.isMDXComponent=!0}}]);