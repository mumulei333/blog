(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{657:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ubuntu-安装jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-安装jenkins"}},[s._v("#")]),s._v(" "),t("strong",[s._v("Ubuntu 安装Jenkins")])]),s._v(" "),t("ol",[t("li",[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" "),t("strong",[s._v("介绍")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins"),t("OutboundLink")],1),s._v("是一个开源自动化服务器，可以自动执行持续集成和交付软件所涉及的重复技术任务。Jenkins是基于Java的，可以从Ubuntu软件包安装，也可以通过下载和运行其Web应用程序存档（WAR）文件来安装 - 该文件是构成在服务器上运行的完整Web应用程序的文件集合。")]),s._v(" "),t("p",[s._v("在本教程中，您将通过添加其Debian软件包存储库来安装Jenkins，并使用该存储库来安装具有"),t("code",[s._v("apt")]),s._v("的软件包。")]),s._v(" "),t("h2",{attrs:{id:"_1-环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备"}},[s._v("#")]),s._v(" "),t("strong",[s._v("1.环境准备")])]),s._v(" "),t("p",[s._v("要学习本教程，您需要：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("一个服务器(本机系统版本：Ubuntu 18.04.4)，需要一个sudo权限的非root 用户(默认Ubuntu用户)和防火墙。我们建议从至少1 GB的RAM开始。具体硬件详情可以看到"),t("a",{attrs:{href:"https://jenkins.io/doc/book/hardware-recommendations/",target:"_blank",rel:"noopener noreferrer"}},[s._v("JenKins硬件"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("查看自己的系统版本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/issue\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装Java 8，遵循我们在Ubuntu 18.04上安装特定版本的OpenJDK的指导原则。")]),s._v(" "),t("p",[s._v("查看系统是否安装jdk")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("java -version\n")])])]),t("p",[s._v("如没有可使用以下命令(包含jdk)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openjdk-8-jre\n")])])]),t("p",[s._v("配置jdk环境, 进入 "),t("code",[s._v("/etc/profile")]),s._v("添加配置文件，:wq保存退出")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#set jdk environment ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/lib/jvm/Java-8-openjdk-amd64 \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JRE_HOME")]),s._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JRE_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])])]),t("p",[s._v("刷新配置文件使其生效")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"_2-安装jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装jenkins"}},[s._v("#")]),s._v(" "),t("strong",[s._v("2.安装Jenkins")])]),s._v(" "),t("p",[s._v("默认Ubuntu软件包中包含的Jenkins版本通常位于项目本身的最新可用版本之后。要利用最新的修补程序和功能，您可以使用项目维护的软件包来安装Jenkins。")]),s._v(" "),t("p",[s._v("首先，将存储库密钥添加到系统：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -q -O - https://pkg.jenkins.io/debian/jenkins.io.key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n")])])]),t("p",[s._v("添加密钥后，系统将返回"),t("code",[s._v("OK")]),s._v("。接下来，将Debian软件包存储库地址附加到服务器的"),t("code",[s._v("sources.list")]),s._v("上：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'")]),s._v("\n")])])]),t("p",[s._v("当这两个都到位时，运行"),t("code",[s._v("update")]),s._v("以便"),t("code",[s._v("apt")]),s._v("使用新的存储库：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n")])])]),t("p",[s._v("最后，安装Jenkins及其依赖项：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jenkins\n")])])]),t("p",[s._v("现在Jenkins及其依赖项已经到位，我们将启动Jenkins服务器。")]),s._v(" "),t("h2",{attrs:{id:"第2步-启动jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第2步-启动jenkins"}},[s._v("#")]),s._v(" "),t("strong",[s._v("第2步 - 启动Jenkins")])]),s._v(" "),t("p",[s._v("让我们用 "),t("code",[s._v("systemctl")]),s._v("启动Jenkins：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start jenkins\n")])])]),t("p",[s._v("由于"),t("code",[s._v("systemctl")]),s._v("不显示输出，您可以使用其"),t("code",[s._v("status")]),s._v("命令来验证Jenkins是否已成功启动：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status jenkins\n")])])])])]),s._v(" "),t("p",[s._v("如果不出意外的话你可以看到已经正在运行了"),t("strong",[s._v("active")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("● jenkins.service - LSB: Start Jenkins at boot "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("\n   Loaded: loaded "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/etc/init.d/jenkins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" generated"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: active "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exited"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Mon "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-07-09 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":22:08 UTC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6min ago\n     Docs: man:systemd-sysv-generator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Tasks: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("limit: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1153")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   CGroup: /system.slice/jenkins.service\n")])])]),t("p",[t("strong",[s._v("注意")]),s._v("：")]),s._v(" "),t("p",[s._v("​\tJenkins默认端口是8080，但是如果本机上已经有8080端口在使用了，那么可以修改 "),t("code",[s._v("/etc/default/jenkins")]),s._v("中的HTTP_PORT参数")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   If commented out, the value from the OS is inherited,  which is normally 022 (as of Ubuntu 12.04,")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   by default umask comes from pam_umask(8) and /etc/login.defs")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# UMASK=027")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# port for HTTP connector (default 8080; disable with -1)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTP_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# servlet context, important if you want to use apache proxying")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NAME")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# arguments to pass to jenkins.")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("p",[s._v("​")]),s._v(" "),t("h2",{attrs:{id:"_4-打开防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-打开防火墙"}},[s._v("#")]),s._v(" "),t("strong",[s._v("4.打开防火墙")])]),s._v(" "),t("p",[s._v("默认情况下，Jenkins在端口"),t("code",[s._v("8080")]),s._v("上运行，所以让我们使用"),t("code",[s._v("ufw")]),s._v("命令打开该端口：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])])]),t("p",[s._v("检查"),t("code",[s._v("ufw")]),s._v("的状态以确认新规则：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw status\n")])])]),t("p",[s._v("您将看到流量被允许从任何地方移植到端口"),t("code",[s._v("8080")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Status: active\n\nTo                         Action      From\n--                         ------      ----\nOpenSSH                    ALLOW       Anywhere\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("                       ALLOW       Anywhere\nOpenSSH "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("               ALLOW       Anywhere "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  ALLOW       Anywhere "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("**注意：**如果防火墙处于非活动("),t("strong",[s._v("inactive")]),s._v(")状态，则以下命令将允许OpenSSH并启用防火墙：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow OpenSSH\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\n")])])]),t("p",[s._v("安装Jenkins并配置防火墙后，我们可以完成初始设置。")]),s._v(" "),t("h2",{attrs:{id:"_5-初始化jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-初始化jenkins"}},[s._v("#")]),s._v(" 5. 初始化Jenkins")]),s._v(" "),t("p",[s._v("此时就可以用web页面初始化Jenkins了，登入http:localhost:8080，开始初始化")]),s._v(" "),t("p",[s._v("根据提示在终端使用"),t("code",[s._v("cat")]),s._v("命令显示密码：")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("sudo cat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jenkins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("secrets"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("initialAdminPassword\n")])])]),t("p",[s._v("输入"),t("strong",[s._v("管理员密码")]),s._v("后开始next时刻")]),s._v(" "),t("h4",{attrs:{id:"常用插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用插件"}},[s._v("#")]),s._v(" 常用插件")]),s._v(" "),t("ul",[t("li",[s._v("nodejs")]),s._v(" "),t("li",[s._v("git")]),s._v(" "),t("li",[s._v("gradle")]),s._v(" "),t("li",[s._v("theme")]),s._v(" "),t("li",[s._v("pipeline")])])])}),[],!1,null,null,null);a.default=n.exports}}]);