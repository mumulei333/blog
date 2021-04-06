(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{652:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("Kubernetes Dashboard 是 Kubernetes 的官方 Web UI。")]),a._v(" "),t("p",[a._v("功能介绍")]),a._v(" "),t("ul",[t("li",[a._v("向 Kubernetes 集群部署容器化应用")]),a._v(" "),t("li",[a._v("诊断容器化应用的问题")]),a._v(" "),t("li",[a._v("管理集群的资源")]),a._v(" "),t("li",[a._v("查看集群上所运行的应用程序")]),a._v(" "),t("li",[a._v("创建、修改Kubernetes 上的资源（例如 Deployment、Job、DaemonSet等）")]),a._v(" "),t("li",[a._v("展示集群上发生的错误")])]),a._v(" "),t("p",[a._v("例如：您可以伸缩一个 Deployment、执行滚动更新、重启一个 Pod 或部署一个新的应用程序")]),a._v(" "),t("h3",{attrs:{id:"_1-准备安装kubernetes-dashboard的yaml文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备安装kubernetes-dashboard的yaml文件"}},[a._v("#")]),a._v(" 1. 准备安装kubernetes dashboard的yaml文件")]),a._v(" "),t("p",[a._v("执行以下命令获取kubernetes dashboard的官方Yaml文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta4/aio/deploy/recommended.yaml\n")])])]),t("p",[a._v("如果获取不到可以直接上github官网"),t("code",[a._v("https://github.com/kubernetes/dashboard/blob/master/aio/deploy/recommended.yaml")]),a._v("打开这个页面复制其中的内容，然后在服务器中创建一个名为recommended.yaml的文件，然后将内容复制进去就行了")]),a._v(" "),t("h5",{attrs:{id:"使用nodeport部署-修改-recommended-yaml文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用nodeport部署-修改-recommended-yaml文件"}},[a._v("#")]),a._v(" 使用NodePort部署，修改 recommended.yaml文件")]),a._v(" "),t("p",[a._v("nodePort: 8080可以省略，缺省则为随机端口，服务启动后使用"),t("code",[a._v("kubectl get svc -n kubernetes-dashboard")]),a._v("查看端口")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" NodePort\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("targetPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8443")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodePort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n")])])]),t("h3",{attrs:{id:"_2-创建-serviceaccount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-serviceaccount"}},[a._v("#")]),a._v(" 2.创建 serviceaccount")]),a._v(" "),t("p",[a._v("前面获取的recommended.yaml的同路径下创建一个名为dashboard-sa.yaml的文件，复制以下内容")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ServiceAccount\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard \n")])])]),t("h3",{attrs:{id:"_3-创建clusterrolebinding为dashboard-sa授权集群权限cluster-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建clusterrolebinding为dashboard-sa授权集群权限cluster-admin"}},[a._v("#")]),a._v(" 3. 创建clusterrolebinding为dashboard sa授权集群权限cluster-admin")]),a._v(" "),t("p",[a._v("还是在同路径下创建一个名为dashboard-clusterrolebinding.yaml的文件，复制以下内容")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" rbac.authorization.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterRoleBinding\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("roleRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiGroup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" rbac.authorization.k8s.io\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterRole\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("subjects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ServiceAccount\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dashboard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n")])])]),t("h3",{attrs:{id:"_4-启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动服务"}},[a._v("#")]),a._v(" 4.启动服务")]),a._v(" "),t("p",[a._v("依次启动一下服务")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("kubectl apply -f  recommended.yaml\nkubectl apply -f  dashboard-sa.yaml\nkubectl apply -f  dashboard-clusterrolebinding.yaml\n")])])]),t("h3",{attrs:{id:"_5-访问dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-访问dashboard"}},[a._v("#")]),a._v(" 5.访问dashboard")]),a._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"生成自定义证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成自定义证书"}},[a._v("#")]),a._v(" 生成自定义证书")])])]),a._v(" "),t("p",[a._v("由于k8s旧版本可能存在此问题，使用Firefox浏览器添加例外可能可以跳过证书问题，但这里我们使用重新制作自签证书，重建secret，更新证书，解决此错误")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl genrsa -out ca.key "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl req -new -x509 -key ca.key -out ca.crt -days "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3650")]),a._v(" -subj "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/C=CN/ST=HB/L=WH/O=DM/OU=YPT/CN=CA"')]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl genrsa -out dashboard.key "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl req -new -sha256 -key dashboard.key -out dashboard.csr -subj "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/C=CN/ST=HB/L=WH/O=DM/OU=YPT/CN=192.168.1.1"')]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dashboard.cnf")]),a._v("\nextensions = san\n[san]\nkeyUsage = digitalSignature\nextendedKeyUsage = clientAuth,serverAuth\nsubjectKeyIdentifier = hash\nauthorityKeyIdentifier = keyid,issuer\nsubjectAltName = IP:192.168.1.1,IP:127.0.0.1,DNS:192.168.1.1,DNS:localhost\nEOF")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" openssl x509 -req -sha256 -days "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3650")]),a._v(" -in dashboard.csr -out dashboard.crt -CA ca.crt -CAkey ca.key -CAcreateserial -extfile dashboard.cnf\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f dashboard.csr dashboard.cnf ca.srl ca.key\n")])])]),t("p",[a._v("其中"),t("code",[a._v("192.168.1.1")]),a._v("是你需要申请证书的服务器ip")]),a._v(" "),t("ul",[t("li",[t("h5",{attrs:{id:"修改kubernetes-dashboard服务配置-重新部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改kubernetes-dashboard服务配置-重新部署"}},[a._v("#")]),a._v(" 修改kubernetes-dashboard服务配置，重新部署")])])]),a._v(" "),t("p",[a._v("删除原kubernetes-dashboard服务，因为之前部署的kubernetes-dashboard服务中有kubernetes-dashboard-certs服务。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("kubectl delete -f recommended.yaml\n")])])]),t("p",[a._v("修改"),t("code",[a._v("recommended.yaml")]),a._v("配置文件，删除kubernetes-dashboard-certs部分配置")]),a._v(" "),t("div",{staticClass:"language-tsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\napiVersion"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" v1\nkind"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Secret\nmetadata"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  labels"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("app"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dashboard\n  name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dashboard"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("certs\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dashboard\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Opaque\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("\n")])])]),t("p",[a._v("重新部署")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("kubectl apply -f  recommended.yaml\n")])])]),t("ul",[t("li",[t("h5",{attrs:{id:"创建dashboard的kubernetes-dashboard-certs服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建dashboard的kubernetes-dashboard-certs服务"}},[a._v("#")]),a._v(" 创建dashboard的kubernetes-dashboard-certs服务")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("kubectl create secret generic kubernetes-dashboard-certs --from-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dashboard.key --from-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dashboard.crt\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"_6-获取验证token登入dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-获取验证token登入dashboard"}},[a._v("#")]),a._v(" 6.获取验证token登入dashboard")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("kubectl describe secret -n kubernetes-dashboard "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("kubectl get secret -n kubernetes-dashboard "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" dashboard-admin "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);