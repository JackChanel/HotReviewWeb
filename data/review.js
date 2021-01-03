const review = {
	List: [{
			id: 1,
			nickname: '蹦迪老掌柜',
			avatar: 'https://labraff-img.oss-cn-hangzhou.aliyuncs.com/HotReview/ava1.jpg',
			context: '如果仅仅是这样，我觉得，还不是最烂的代码吧。应该看起来还算正常，而且有详细的注释，让人充满希望，相信跟着你的思路走，用不了多少工夫就可以做出适合新需求的修改。但是在改的过程中，发现越来越多的问题，最后不得不停下手来再看一遍，再去写，最后发现是在写不下去，不得不推倒重来。。。总之，你人可以离开公司，但是你的传说必须在公司里面流传。大家每次看到你写的代码，都会感叹一句这个人真是厉害，或者每次出bug的时候，大家都会说这是xxx遗留的代码',
			like: 172,
			islike: false,
			comment: 13,
			star: false,
			href: '?id=1'
		},
		{
			id: 2,
			nickname: 'O5-Yoe',
			avatar: 'https://labraff-img.oss-cn-hangzhou.aliyuncs.com/HotReview/ava2.png',
			context: '从不测试。千万不要测试任何的出错处理，从来也不检测系统调用的返回值。永远不做性能测试。如果不够快就告诉用户换一个更快的机器。如果你一做测试，那么就可能会要改你的算法，甚至重设计，重新架构。不要写测试案例。不要做什么代码覆盖率测试，自动化测试。测试是懦夫行为。一个勇敢的程序员是根本不需要这一步的。如果你对你的代码有强大的信心，那还要什么测试呢？真正的程序员是不需要测试自己的代码的。',
			like: 72,
			islike: false,
			comment: 3,
			star: false,
			href: '?id=2'
		},
		{
			id: 3,
			nickname: '潇湘晨报',
			avatar: 'https://labraff-img.oss-cn-hangzhou.aliyuncs.com/HotReview/ava3.png',
			context: '《巴啦啦小魔仙》美琪扮演者孙侨潞心梗去世，年仅25岁中青年出现心肌梗塞的比例逐年增加。和老年人相比，年轻人发生心肌梗塞通常起病急骤，症状凶险，多无先兆不适而突然发病，易出现致死性心律失常，早期猝死率高。',
			like: 12,
			islike: false,
			comment: 5,
			star: false,
			href: '?id=3'
		},
		{
			id: 4,
			nickname: '不吃早饭',
			avatar: 'https://labraff-img.oss-cn-hangzhou.aliyuncs.com/HotReview/ava4.jpg',
			context: '忽悠。你会学会忽悠，就算你的代码写得很烂，你也要为其挂上GoF设计模式的标签，就算你的项目做得再烂，你也要为其挂上敏捷的标签，只有学会像中国Thoughtworks的咨询师那样去忽悠，你才能学会更炫更酷的方法，让整个团队和公司，甚至整个业界都开始躁动，这样才能真正为难维护的代码铺平道路。',
			like: 112,
			islike: false,
			comment: 13,
			star: false,
			href: '?id=4'
		},
		{
			id: 5,
			nickname: '材料搬砖狗',
			avatar: 'https://pic2.zhimg.com/v2-d0111f936bb5dd3575f163c9ef45dff9_im.jpg',
			context: '引用马克思的一句话：“资本来到世间，从头到脚每个毛孔都滴着血和肮脏的东西。”RIP为妹子默哀。年轻的生命就这样逝去了，才23岁。男朋友估计得哭死了。不得不感慨，某些互联网公司以及一些私企的狼性文化，真是要榨干打工人的剩余价值。最近猝死的新闻有点密集，身体是自己的，各位打工人能摸鱼还是要多摸鱼。以及熬夜是不敢像以前一样长时间熬夜了',
			like: 21,
			islike: false,
			comment: 13,
			star: false,
			href: '?id=4'
		},
		{
			id: 6,
			nickname: '壮士请收下我的赞',
			avatar: 'https://pic2.zhimg.com/v2-b00b42d5ff0c4bf74673c2acfc2369c1_im.jpg',
			context: '相对欧美“自由世界”的“自由”而言，东方阵营一直以来的旗号都是“民主”，即人民当家做主。当包括主体俄罗斯在内的所有加盟国都认识到民主只是个笑话，所有富人官僚都在实实在在地拥抱资本的时候，这个旗号便一文不值了。',
			like: 17,
			islike: false,
			comment: 3,
			star: false,
			href: '?id=4'
		},
		{
			id: 7,
			nickname: '纽约鸡汤君',
			avatar: 'https://pic4.zhimg.com/v2-7148a2146966778adb791440e6dfa4dc_im.jpg',
			context: '看到这个问题我内心咯噔了一下，刚在Coinbase尝试卖了$5块钱的比特币，卖出去了，不怕了。但我又想万一把我整个家当，$3400刀的比特币，一次出手，币价会不会因为市场接不住而崩盘，很紧张。后来查了一下，过去24小时比特币的交易量是$710亿美金，67%用户增持，33%用户出售。我心里好受多了，没那么紧张了。 因为毕竟这个交易规模的市场，不像是我$3400块能左右的样子。',
			like: 121,
			islike: false,
			comment: 14,
			star: false,
			href: '?id=4'
		},
		{
			id: 8,
			nickname: '罗翔说刑法',
			avatar: 'https://pic4.zhimg.com/v2-c3b1ad8057c14fc8cf6520702a307798_im.jpg',
			context: '一段时间内出了好几起高校教师行为失范的事件,让同为教师的我不禁有许多的感想。 我从小就想成为一名老师。 小学作文长大了想干什么, 我好像从来没有写过想当科学家,也没有写过想当领导,只写过想当老师。那时常常引用一句老套的诗词来拔高主题———春蚕到死丝方尽, 蜡炬成灰泪始干。 后来才知道, 这描写的是男女之间的爱情, 用来歌颂老师, 似乎不太合适。 从小到大, 教过我的老师有很多, 有的严厉, 有的温和, 但是我从来没有遇到让我厌恶教师职业的老师。',
			like: 8721,
			islike: false,
			comment: 23,
			star: false,
			href: '?id=4'
		}

	]
}

export default review
