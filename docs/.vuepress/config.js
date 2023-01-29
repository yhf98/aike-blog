module.exports = {
	markdown: {
		lineNumbers: true
	},
	title: 'Aike小栈',
	description: 'Just playing around',
	themeConfig: {
		nav: [{
				text: '首页',
				link: '/'
			},
			{
				text: 'Cookbook',
				link: '/Cookbook/'
			},
			{
				text: 'bigdata',
				link: '/bigdata/'
			},
			{
				text: 'Python数据分析',
				link: '/python-analysis/'
			},
			{
				text: '英语',
				ariaLabel: 'english',
				items: [{
						text: '时态',
						link: '/english/tense/'
					},
					{
						text: '动词',
						link: '/english/verb/'
					}
				]
			},
			{
				text: '数据结构与算法',
				link: '/dataStructureAndAlgorithm/'
			},
			{
				text: '汇编语言',
				link: '/masm/'
			},
			{
				text: '微服务',
				link: '/microserver/'
			},
			{
				text: 'Dubbo',
				link: '/dubbo/'
			},
			{
				text: 'K8s',
				link: '/k8s/'
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/angular001'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/yhf98?tab=repositories'
			},
		],
		head: [
			['link', {
				rel: 'shortcut icon',
				type: "image/x-icon",
				href: `./favicon.ico`
			}]
		],
		//sidebar: 'auto'
		// sidebar:[
		// 	{
		// 		title: '英语语法',   // 必要的
		// 		path: '/english/tense/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
		// 		collapsable: false, // 可选的, 默认值是 true,
		// 		sidebarDepth: 1,    // 可选的, 默认值是 1
		// 		children: [
		// 		  "",
		// 		  "一般现在时",
		// 		  "一般过去时"
		// 		]
		// 	},
		// ]
		sidebar: {
			"/guide/": [""],
			"/math/": ["", "第一章", "第二章", "第三章", "第四章", "第五章", "第六章", "第七章"],
			"/english/tense/": ["", "一般现在时", "一般过去时"],
			"/dataStructureAndAlgorithm/":["","链表","树","图","查找算法","排序算法"],
			"/masm/":["","第一章","第二章"],
			"/microserver/":["","第一章","第二章","第三章","第四章","第五章","第六章","第七章","第八章","第九章","第十章"],
			"/k8s/":["","1","2"],
			"/Cookbook/":["","数组"],
			"/bigdata/":["","R语言"],
			"/dubbo/":["","基础知识","dubbo配置","高可用","dubbo原理"],
			"/python-analysis/":["","第01章 准备工作","第02章 Python语法基础，IPython和Jupyter Notebooks","第03章 Python的数据结构、函数和文件","第04章 NumPy基础：数组和矢量计算","第05章 pandas入门","第06章 数据加载、存储与文件格式","第07章 数据清洗和准备","第08章 数据规整：聚合、合并和重塑","第09章 绘图和可视化","第10章 数据聚合与分组运算","第11章 时间序列","第12章 pandas高级应用","第13章 Python建模库介绍","第14章 数据分析案例","附录A NumPy高级应用","附录B 更多关于IPython的内容（完）"],
		}
	}
}
