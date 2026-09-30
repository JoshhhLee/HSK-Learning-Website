/* HSK 5 course data (Book 5A = lessons 1–18).
 * Lesson order, word lists (hsk5-words.js, from the book's vocabulary index) and
 * the words/comparisons explained follow HSK Standard Course 5A.
 * All passages, dialogues, explanations and examples are original; famous stories
 * and facts are retold in my own words.
 */
HSK.registerLevel({
  level: 5,
  title: 'HSK 5',
  subtitle: '2,500 words · reading real texts (Book 5A)',
  book: 'HSK Standard Course 5A (lessons 1–18)',
  lessons: [
    {
      n: 1, zh: '爱的细节', en: 'The details of love',
      focus: 'Unit 1 · Understanding life — 如何 vs 怎么 · 靠 · 居然',
      words: HSK.W5[1],
      dialogues: [
        { scene: 'Reading: a radio programme', lines: [
          ['📖', '电台 里 有 一 个 节目 ， 请 听众 叙述 自己 婚姻 中 的 细节 。', 'A radio programme asked listeners to describe small details from their marriages.'],
          ['📖', '一 位 女士 说 ， 她 和 老公 经常 吵架 ， 她 总是 抱怨 他 不 爱护 自己 ， 甚至 想 过 离婚 。', 'One woman said she and her husband often quarrelled; she always complained that he didn\'t look after her, and had even thought of divorce.'],
          ['📖', '有 一 天 半夜 ， 她 胃 疼 得 厉害 。 老公 立刻 起来 ， 递 给 她 一 杯 热 水 ， 让 她 靠 在 自己 的 肩膀 上 。', 'One night her stomach hurt badly. Her husband got up at once, handed her a cup of hot water and let her lean on his shoulder.'],
          ['📖', '他 一 夜 没 睡 ， 一直 等待 着 ， 一点儿 也 没有 不耐烦 。', "He didn't sleep all night, just waited, without the slightest impatience."],
          ['📖', '她 暗暗 对比 了 一下 ： 原来 爱情 不 在 大 事 上 ， 而 在 这些 细节 里 。 说 到 这儿 ， 她 居然 哭 了 。', 'She quietly compared: love isn\'t in the big things, but in these details. Saying this, she unexpectedly began to cry.'],
        ]},
        { scene: 'Relaxing', lines: [
          ['A', '你 平时 如何 放松 ？', 'How do you usually relax?'],
          ['B', '靠 听 电台 ， 尤其 是 半夜 的 节目 。', 'By listening to the radio, especially the late-night shows.'],
          ['A', '你 居然 那么 晚 还 不 睡 ？', "You're actually still up that late?"],
        ]},
      ],
      grammar: [
        { title: '如何 vs 怎么',
          body: '<b>如何</b> is a formal, written "how": 如何才能…? It can also ask for an opinion: 这个方法如何? <b>怎么</b> is the everyday word, and it can also mean "why / how come", which 如何 can\'t.',
          examples: [
            ['如何 才 能 让 婚姻 幸福 ？', 'How can a marriage be made happy?'],
            ['你 怎么 还 不 睡 ？', 'Why aren\'t you asleep yet?'],
          ]},
        { title: '靠 = to lean on; to rely on',
          body: '<b>靠</b> literally means leaning against something; figuratively it means depending on something.',
          examples: [
            ['让 她 靠 在 自己 的 肩膀 上 。', 'He let her lean on his shoulder.'],
            ['成功 要 靠 自己 的 努力 。', 'Success depends on your own effort.'],
          ]},
        { title: '居然 = unexpectedly (surprise)',
          body: 'Like <b>竟然</b>: something happens that the speaker didn\'t expect.',
          examples: [
            ['她 居然 哭 了 。', 'She actually started crying.'],
            ['这么 难 的 题 ， 他 居然 做 对 了 。', 'He actually got such a hard question right.'],
          ]},
      ],
    },

    {
      n: 2, zh: '留串钥匙给父母', en: 'Leave a set of keys for your parents',
      focus: 'Family · 以来 · 临 · 立刻 · 悄悄 vs 偷偷',
      words: HSK.W5[2],
      dialogues: [
        { scene: 'Reading: a set of keys', lines: [
          ['📖', '我 在 城市 打工 已经 五 年 了 。 自从 离开 县 里 的 农村 以来 ， 我 很 少 回 家 。', "I've been working in the city for five years. Since leaving my village in the county, I've rarely gone home."],
          ['📖', '去年 我 买 了 一 套 房子 ， 装修 好 以后 ， 父母 坐 长途 汽车 来 看 我 。', 'Last year I bought a flat. After it was decorated, my parents took a long-distance bus to visit me.'],
          ['📖', '临 走 的 时候 ， 我 悄悄 把 一 串 钥匙 放 进 了 妈妈 的 包 里 。', "Just before they left, I quietly slipped a set of keys into Mum's bag."],
          ['📖', '后来 妈妈 打电话 说 ， 看到 钥匙 ， 她 流泪 了 ： “ 有 了 这 串 钥匙 ， 我 就 觉得 那 也 是 我们 的 家 。 ”', 'Later Mum called and said she cried when she found the keys: "With these keys, I feel that\'s our home too."'],
          ['📖', '我 这 才 想象 到 父母 的 感受 。 他们 辛苦 了 一辈子 ， 要 的 其实 就 是 一 个 温暖 的 家 。', "Only then could I imagine how my parents felt. They've worked hard all their lives; what they want is simply a warm home."],
        ]},
        { scene: 'Grandma and uncle', lines: [
          ['A', '你 姥姥 和 舅舅 还 住 在 农村 吗 ？', 'Do your grandma and uncle still live in the countryside?'],
          ['B', '是 的 ， 等 我 挣 了 钱 ， 就 接 他们 来 城里 住 。', "Yes. Once I've earned enough, I'll bring them to live in the city."],
          ['A', '那 你 先 把 卧室 收拾 好 ， 被子 拿 出去 晒晒 。', 'Then tidy the bedroom first and air the quilts in the sun.'],
        ]},
      ],
      grammar: [
        { title: '(自从) … 以来 = since …',
          body: '<b>以来</b> after a time or event means "from then until now".',
          examples: [
            ['自从 离开 农村 以来 ， 我 很 少 回 家 。', 'Since leaving the countryside, I rarely go home.'],
            ['今年 以来 ， 我 一直 很 忙 。', "I've been busy since the start of this year."],
          ]},
        { title: '临 + verb = just before …',
          body: '<b>临</b> + a one-syllable verb, often followed by 的时候 or 前.',
          examples: [
            ['临 走 的 时候 ， 我 把 钥匙 给 了 她 。', 'Just before leaving, I gave her the keys.'],
            ['临 睡 前 别 喝 咖啡 。', "Don't drink coffee just before bed."],
          ]},
        { title: '立刻 = immediately',
          body: '<b>立刻</b> = right away, with no delay (a little more emphatic than 马上).',
          examples: [
            ['听到 消息 ， 他 立刻 回 家 了 。', 'Hearing the news, he went home at once.'],
          ]},
        { title: '悄悄 vs 偷偷',
          body: '<b>悄悄</b> = quietly, so as not to disturb anyone (neutral, often kind). <b>偷偷</b> = secretly, not wanting to be found out, often for something not allowed.',
          examples: [
            ['我 悄悄 把 钥匙 放 进 她 的 包 里 。', "I quietly put the keys in her bag."],
            ['他 偷偷 抽烟 。', 'He smokes on the sly.'],
          ]},
      ],
      culture: { title: 'Family titles', body: 'Chinese has separate words for every relative. On the <b>father\'s</b> side: 爷爷 (grandpa), 奶奶 (grandma), 姑姑 (aunt), 叔叔 (younger uncle), 伯伯 (older uncle). On the <b>mother\'s</b> side: 外公/姥爷 (grandpa), 外婆/姥姥 (grandma), 舅舅 (uncle), 阿姨 (aunt). Children also call unrelated adults 叔叔 and 阿姨 to be polite.' },
    },

    {
      n: 3, zh: '人生有选择，一切可改变', en: 'Life offers choices; everything can change',
      focus: 'Choices · 各自 · 勿 · 包括 · 时刻 · 舒适 vs 舒服',
      words: HSK.W5[3],
      dialogues: [
        { scene: 'Reading: a different life', lines: [
          ['📖', '翟峰 曾经 有 一 份 稳定 的 工作 ， 待遇 很 好 ， 包括 住房 和 汽车 。', 'Zhai Feng once had a stable job with good conditions, including housing and a car.'],
          ['📖', '可是 他 每 天 都 在 发愁 ： 难道 人生 就 是 这样 吗 ？', 'But every day he worried: is this all life is?'],
          ['📖', '三十 岁 那 年 ， 他 辞职 了 ， 学会 了 驾驶 帆船 ， 从 新西兰 出发 ， 去 看 海 上 的 彩虹 。', 'At thirty he quit, learned to sail, and set off from New Zealand to see rainbows over the sea.'],
          ['📖', '在 海 上 ， 他 遇到 过 雷 和 闪电 ， 船 也 漏 过 水 ， 可是 他 的 心 却 很 平静 。', 'At sea he met thunder and lightning, and the boat leaked, but his heart was calm.'],
          ['📖', '他 说 ： “ 人生 时刻 都 有 选择 ， 一切 都 可以 改变 。 ”', 'He said: "Life offers choices at every moment; everything can change."'],
        ]},
        { scene: 'Weekend by the sea', lines: [
          ['A', '你 周末 一般 做 什么 ？', 'What do you usually do at the weekend?'],
          ['B', '傍晚 去 海边 钓 鱼 ， 然后 吃 一 顿 海鲜 。', 'At dusk I go fishing by the sea, then have a seafood meal.'],
          ['A', '真 舒服 ！ 下 次 我们 轮流 开 车 去 吧 。', "Sounds lovely! Next time let's take turns driving."],
        ]},
      ],
      grammar: [
        { title: '各自 = each (their own)',
          body: '<b>各自</b> = each person separately, their own.',
          examples: [
            ['我们 各自 回 家 吧 。', "Let's each go home."],
            ['每 个 人 都 有 各自 的 选择 。', 'Everyone has their own choices.'],
          ]},
        { title: '勿 = do not (written)',
          body: '<b>勿</b> is a formal "don\'t", used on signs and notices: 请勿….',
          examples: [
            ['请 勿 吸烟 。', 'No smoking.'],
            ['请 勿 打扰 。', 'Do not disturb.'],
          ]},
        { title: '包括 = to include',
          body: '<b>包括</b> lists what is part of the whole.',
          examples: [
            ['待遇 很 好 ， 包括 住房 和 汽车 。', 'The package is good, including housing and a car.'],
          ]},
        { title: '时刻 = moment; at every moment',
          body: 'As a noun, <b>时刻</b> = a moment (重要的时刻). As an adverb, 时刻 = all the time, constantly.',
          examples: [
            ['这 是 最 重要 的 时刻 。', 'This is the most important moment.'],
            ['人生 时刻 都 有 选择 。', 'Life offers choices at every moment.'],
          ]},
        { title: '舒适 vs 舒服',
          body: '<b>舒适</b> (formal) describes surroundings and objects: a cosy room, a comfortable car. <b>舒服</b> also covers how your body feels: 我不舒服 = I\'m unwell.',
          examples: [
            ['这 个 房间 很 舒适 。', 'This room is very cosy.'],
            ['我 今天 身体 不 舒服 。', "I don't feel well today."],
          ]},
      ],
    },

    {
      n: 4, zh: '子路背米', en: 'Zilu carries rice',
      focus: 'Unit 2 · Past and present — 至今 · 顶 · …得不行 · 反而 · 满足 vs 满意',
      words: HSK.W5[4],
      dialogues: [
        { scene: 'Reading: a story of filial love', lines: [
          ['📖', '子路 是 孔子 的 学生 ， 生活 在 春秋 时期 。 从前 ， 他 家 很 穷 ， 常常 没有 足够 的 食物 。', 'Zilu, a student of Confucius, lived in the Spring and Autumn period. His family was poor and often short of food.'],
          ['📖', '为了 让 父母 吃 上 米 ， 他 每 次 都 走 一百 多 里 路 ， 把 米 背 回 家 。', 'So that his parents could eat rice, he would walk over a hundred li each time and carry rice home on his back.'],
          ['📖', '冬天 路 很 滑 ， 他 顶 着 大 风 ， 后背 冷 得 不行 ， 却 从来 不 抱怨 。', 'In winter the roads were slippery; walking into the wind, his back was freezing, yet he never complained.'],
          ['📖', '后来 ， 子路 成 了 大 官 ， 有 了 很 多 银子 ， 生活 反而 不 快乐 了 ， 因为 父母 已经 去世 了 。', "Later Zilu became a high official with plenty of silver, but he was actually less happy, because his parents had died."],
          ['📖', '他 说 ： “ 我 宁可 再 去 背 米 ， 也 希望 父母 还 在 。 ” 这 个 孝顺 的 故事 至今 还 在 流传 。', 'He said: "I would rather carry rice again, if only my parents were still here." This story of filial love is still told today.'],
        ]},
        { scene: 'Are you satisfied?', lines: [
          ['A', '你 满足 现在 的 生活 吗 ？', 'Are you content with your life now?'],
          ['B', '物质 上 很 满足 ， 可是 工作 占 了 我 大 部分 时间 。', 'Materially yes, but work takes up most of my time.'],
        ]},
      ],
      grammar: [
        { title: '至今 = until now, to this day',
          body: '<b>至今</b> = from some point in the past right up to now.',
          examples: [
            ['这 个 故事 至今 还 在 流传 。', 'This story is still told today.'],
          ]},
        { title: '顶 = to go against, face (wind, rain)',
          body: '<b>顶着 + 风/雨/压力</b> = pushing on against it.',
          examples: [
            ['他 顶 着 大 风 走 回 家 。', 'He walked home into a strong wind.'],
          ]},
        { title: 'Adjective + 得不行 = extremely',
          body: 'Spoken: 冷得不行 = unbearably cold, 累得不行 = exhausted.',
          examples: [
            ['后背 冷 得 不行 。', 'His back was freezing.'],
            ['我 今天 累 得 不行 。', "I'm completely worn out today."],
          ]},
        { title: '反而 = instead, on the contrary',
          body: '<b>反而</b> introduces a result that is the <b>opposite</b> of what you\'d expect.',
          examples: [
            ['有 了 钱 ， 他 反而 不 快乐 了 。', 'Once he had money, he was actually less happy.'],
          ]},
        { title: '满足 vs 满意',
          body: '<b>满足</b> = to feel content, or to satisfy (a need): 满足要求. <b>满意</b> = to be pleased with something: 对…很满意.',
          examples: [
            ['公司 满足 了 我 的 要求 。', 'The company met my requirements.'],
            ['老师 对 我 的 作业 很 满意 。', 'The teacher is pleased with my homework.'],
          ]},
      ],
      culture: { title: 'Filial piety (孝)', body: '<b>孝 (xiào)</b>, respect and care for your parents, is one of the core values of Confucian culture. The character itself shows 老 (old) above 子 (child), like a child supporting an elder. Stories like Zilu\'s were collected in the <b>二十四孝</b> ("24 stories of filial piety") and taught to children for centuries.' },
    },

    {
      n: 5, zh: '济南的泉水', en: 'The springs of Jinan',
      focus: 'Places & legends · 起来 (looks/sounds…) · 于 · 从而 · 为 (wéi) · 美丽 vs 优美',
      words: HSK.W5[5],
      dialogues: [
        { scene: 'Reading: the city of springs', lines: [
          ['📖', '济南 是 一 座 历史 悠久 的 城市 ， 城 里 分布 着 七十 多 处 泉水 ， 被 称 为{wéi} “ 泉城 ” 。', 'Jinan is a city with a long history. More than seventy springs are scattered around it, so it\'s called the "City of Springs".'],
          ['📖', '其中 最 有名 的 是 趵突泉 。 泉水 从 地下 冲 出来 ， 形成 三 个 形状 独特 的 水花 ， 看 起来 就 像 三 条 小 龙 。', 'The most famous is Baotu Spring. Water rushes up from underground, forming three uniquely shaped jets that look like three little dragons.'],
          ['📖', '很 多 诗人 都 描写 过 它 ， 赞美 它 的 优美 。', 'Many poets have described it and praised its beauty.'],
          ['📖', '传说 很 久 以前 ， 一 条 恶 龙 抢 走 了 老百姓 的 水 ， 一 个 善良 的 年轻 人 救 了 大家 ， 从而 有 了 这些 泉水 。', 'Legend says that long ago an evil dragon stole the people\'s water; a kind young man saved everyone, and that is how the springs came to be.'],
          ['📖', '如今 ， 泉水 成为 了 济南 的 名片 ， 反映 了 这 座 城市 独特 的 文化 。', "Today the springs are Jinan's calling card, reflecting the city's unique culture."],
        ]},
        { scene: 'Poetry', lines: [
          ['A', '你 喜欢 什么 样 的 诗 ？', 'What kind of poetry do you like?'],
          ['B', '描写 自然 的 ， 读 起来 很 优美 。', 'Poems about nature. They sound so graceful.'],
        ]},
      ],
      grammar: [
        { title: 'V + 起来 = when you … it (evaluation)',
          body: '<b>看起来 / 听起来 / 读起来 + adjective</b> gives your impression from doing it.',
          examples: [
            ['看 起来 就 像 三 条 小 龙 。', 'It looks like three little dragons.'],
            ['这 首 诗 读 起来 很 优美 。', 'This poem reads beautifully.'],
          ]},
        { title: '于 = at, in, from (written)',
          body: '<b>于</b> is a formal preposition after verbs: 出生于 (born in), 位于 (located in), 来自于 (come from).',
          examples: [
            ['他 出生 于 北京 。', 'He was born in Beijing.'],
          ]},
        { title: '从而 = thus, thereby',
          body: '<b>从而</b> introduces the result or purpose that follows from what was just said.',
          examples: [
            ['多 读 书 ， 从而 提高 自己 的 水平 。', 'Read more and thereby raise your level.'],
          ]},
        { title: '为 (wéi) = to be, to become',
          body: 'In written patterns, <b>为 (wéi)</b> means "to be / as": 称为 (be called), 成为 (become), 选…为… (elect … as …).',
          examples: [
            ['济南 被 称 为{wéi} “ 泉城 ” 。', 'Jinan is called the "City of Springs".'],
            ['大家 选 他 为{wéi} 班长 。', 'Everyone elected him class monitor.'],
          ]},
        { title: '美丽 vs 优美',
          body: '<b>美丽</b> = beautiful (people, places, things). <b>优美</b> = graceful, elegant: for scenery, music, writing, movement. You wouldn\'t call a person 优美.',
          examples: [
            ['她 是 一 个 美丽 的 姑娘 。', "She's a beautiful girl."],
            ['这 首 音乐 很 优美 。', 'This music is very graceful.'],
          ]},
      ],
    },

    {
      n: 6, zh: '除夕的由来', en: 'How New Year\'s Eve began',
      focus: 'Festivals & legends · 替 · 说不定 · 像…似的 · 纷纷 · 打听 vs 询问',
      words: HSK.W5[6],
      dialogues: [
        { scene: 'Reading: the monster "Xi"', lines: [
          ['📖', '传说 很 久 以前 ， 有 一 个 叫 “ 夕 ” 的 怪物 。 每 年 冬天 ， 它 都 会 出来 伤害 人 和 动物 ， 给 老百姓 制造 灾害 。', 'Legend says that long ago there was a monster called "Xi". Every winter it came out to hurt people and animals, causing disaster.'],
          ['📖', '大家 都 很 恨 它 ， 可是 又 很 无奈 ， 只好 纷纷 逃 到 山 上 。', 'Everyone hated it but felt helpless, so one after another they fled to the mountains.'],
          ['📖', '有 一 年 ， 一 个 英俊 的 年轻 人 决定 替 大家 除 掉 “ 夕 ” 。 他 发现 ， “ 夕 ” 最 怕 红色 和 声音 。', 'One year a handsome young man decided to get rid of Xi for everyone. He discovered that Xi feared red and loud noises most.'],
          ['📖', '于是 他 让 大家 在 门 上 贴 红 纸 ， 晚上 放 鞭炮 。 “ 夕 ” 来 了 ， 果然 被 吓 得 像 疯 了 似的 逃 走 了 。', 'So he had everyone stick red paper on their doors and set off firecrackers at night. When Xi came, sure enough, it fled as if mad with fear.'],
          ['📖', '从此 ， 人们 把 这 一 天 叫作 “ 除夕 ” 。 放 鞭炮 、 守岁 、 全家 一起 熬夜 ， 就 成 了 过年 的 风俗 。', 'From then on people called the day Chuxi, "getting rid of Xi". Firecrackers and staying up all night together became New Year customs.'],
        ]},
        { scene: 'Firecrackers this year?', lines: [
          ['A', '你 打听 到 了 吗 ？ 今年 除夕 能 放 鞭炮 吗 ？', "Did you find out? Can we set off firecrackers this New Year's Eve?"],
          ['B', '说不定 不 能 ， 我 去 询问 一下 。', "Maybe not. I'll go and ask officially."],
        ]},
      ],
      grammar: [
        { title: '替 = for, on behalf of',
          body: '<b>替 + person + verb</b> = do something for someone or in their place.',
          examples: [
            ['他 替 大家 除 掉 了 “ 夕 ” 。', 'He got rid of Xi for everyone.'],
            ['你 替 我 向 她 问 好 。', 'Say hello to her for me.'],
          ]},
        { title: '说不定 = maybe, perhaps',
          body: '<b>说不定</b> = "it\'s possible that…", often at the start.',
          examples: [
            ['说不定 他 已经 走 了 。', "Maybe he's already left."],
          ]},
        { title: '像 … 似的 = as if, like',
          body: 'Wraps a comparison: <b>像 + something + 似的</b>.',
          examples: [
            ['它 像 疯 了 似的 逃 走 了 。', 'It fled as if it had gone mad.'],
            ['他 高兴 得 像 个 孩子 似的 。', 'He was as happy as a child.'],
          ]},
        { title: '纷纷 = one after another',
          body: '<b>纷纷</b> describes many people or things doing something in succession.',
          examples: [
            ['大家 纷纷 逃 到 山 上 。', 'People fled to the mountains one after another.'],
          ]},
        { title: '打听 vs 询问',
          body: '<b>打听</b> = ask around informally for news or information. <b>询问</b> = formally inquire, for example at an office.',
          examples: [
            ['我 去 打听 一下 他 的 消息 。', "I'll ask around for news of him."],
            ['我 向 工作 人员 询问 了 情况 。', 'I inquired with the staff.'],
          ]},
      ],
      culture: { title: 'Spring Festival customs', body: 'Besides firecrackers and <b>守岁</b> (staying up till midnight), families paste red <b>春联</b> (couplets) and the character <b>福</b> (luck), often upside down, because "福倒了" sounds like "luck has arrived". They eat dumplings and fish, and children get red envelopes. The celebrations end with the Lantern Festival on the 15th day.' },
    },

    {
      n: 7, zh: '成语故事两则', en: 'Two idiom stories',
      focus: 'Unit 3 · Stories — 瞎 · 分别 · 根 · 便 · 忽然 vs 突然',
      words: HSK.W5[7],
      dialogues: [
        { scene: 'Reading: the blind men and the elephant', lines: [
          ['📖', '第一 则 ： 从前 ， 有 几 个 瞎子 想 知道 大象 是 什么 样子 ， 便 分别 去 摸 。', 'The first story: once some blind men wanted to know what an elephant was like, so they each went to touch it.'],
          ['📖', '摸 到 牙齿 的 说 ： “ 大象 又 硬 又 滑 ， 像 一 根 石头 。 ” 摸 到 耳朵 的 说 ： “ 不 对 ， 它 像 一 把 大 扇子 。 ”', 'The one who touched the tusk said: "An elephant is hard and smooth, like a stone pillar." The one who touched the ear said: "No, it\'s like a big fan."'],
          ['📖', '摸 到 身体 的 说 它 像 一 面 墙 ， 摸 到 尾巴 的 说 它 像 一 根 绳子 。 他们 都 说 别人 在 胡说 。', 'The one who touched its body said it was like a wall; the one who touched its tail said it was like a rope. Each said the others were talking nonsense.'],
          ['📖', '这 个 成语 告诉 我们 ： 只{zhǐ} 看 一 个 方面 ， 得{dé} 出 的 结论 往往 是 片面 的 。', 'This idiom teaches us that looking at only one side leads to one-sided conclusions.'],
        ]},
        { scene: 'Reading: Li Guang shoots a rock', lines: [
          ['📖', '第二 则 ： 西汉 有 一 位 善于 射箭 的 将军 ， 叫 李广 。', 'The second story: in the Western Han there was a general, Li Guang, who was an excellent archer.'],
          ['📖', '一 天 傍晚 ， 他 忽然 看见 草 里 蹲 着 一 只 老虎 ， 立刻 尽力 射 了 一 箭 。', 'One evening he suddenly saw a tiger crouching in the grass and shot an arrow with all his strength.'],
          ['📖', '走 近 一 看 ， 原来 是 一 块 大 石头 ， 箭 已经 射 进 了 石头 里 ！ 他 又 连续 射 了 几 次 ， 却 再 也 射 不 进去 了 。', 'Coming closer, he saw it was a big rock, and the arrow had gone right into it! He shot again several times but could never pierce it again.'],
        ]},
        { scene: 'A broken cup', lines: [
          ['A', '哎 ， 我 的 杯子 碎 了 ！', 'Oh no, my cup is broken!'],
          ['B', '不要紧 ， 我 再 给 你 拿 一 个 。', "Never mind, I'll get you another."],
        ]},
      ],
      grammar: [
        { title: '瞎 = blind; blindly, without reason',
          body: 'As an adverb, <b>瞎 + verb</b> = do something foolishly or without basis: 瞎说 (talk nonsense), 瞎忙 (be busy for nothing).',
          examples: [
            ['别 瞎 说 ！', "Don't talk nonsense!"],
          ]},
        { title: '分别 = separately; respectively',
          body: '<b>分别</b> = each doing it on their own, or matching items in order.',
          examples: [
            ['几 个 人 分别 去 摸 。', 'Each of them went to touch it.'],
            ['我们 分别 住 在 北京 和 上海 。', 'We live in Beijing and Shanghai respectively.'],
          ]},
        { title: '根 = measure word for long thin things; root',
          body: '<b>一根</b> + 绳子 (rope), 筷子 (chopstick), 头发 (hair)…',
          examples: [
            ['它 像 一 根 绳子 。', "It's like a rope."],
          ]},
        { title: '便 = then (written 就)',
          body: '<b>便</b> is a written <b>就</b>: the next action follows naturally.',
          examples: [
            ['吃 完 饭 ， 他 便 出去 了 。', 'After eating, he went out.'],
          ]},
        { title: '忽然 vs 突然',
          body: 'Both mean "suddenly". <b>突然</b> can also be an adjective (这个消息太突然了); <b>忽然</b> can only be an adverb.',
          examples: [
            ['他 忽然 看见 一 只 老虎 。', 'He suddenly saw a tiger.'],
            ['这 个 消息 太 突然 了 。', 'This news is so sudden.'],
          ]},
      ],
      culture: { title: 'Chengyu (four-character idioms)', body: '<b>成语 (chéngyǔ)</b> are fixed four-character expressions, most with a story behind them: <b>盲人摸象</b> ("blind men touching an elephant", a partial view), <b>画蛇添足</b> ("adding feet to a snake", overdoing it), <b>守株待兔</b> ("waiting by a stump for a rabbit", waiting for luck). Educated Chinese uses thousands of them, and they come up often in the HSK 5 and 6 reading sections.' },
    },

    {
      n: 8, zh: '“朝三暮四”的古今义', en: '"Three in the morning, four at night": then and now',
      focus: 'Old meanings, new meanings · 倒 · V来V去 · 要不 · 彼此 vs 互相',
      words: HSK.W5[8],
      dialogues: [
        { scene: 'Reading: the monkey keeper', lines: [
          ['📖', '古代 宋国 有 一 个 人 ， 家 里 养 了 一 群 猴子 。 他 和 猴子 相处 得 很 好 ， 彼此 都 能 明白 对方 的 表情 。', "In the ancient state of Song, a man kept a troop of monkeys. He got on so well with them that they could read each other's faces."],
          ['📖', '后来 家庭 的 粮食 不足 ， 他 只好 限制 猴子 的 食物 。', 'Later his family ran short of grain, so he had to limit the monkeys\' food.'],
          ['📖', '他 对 猴子 说 ： “ 以后 早上 给 你们 三 颗 果实 ， 晚上 四 颗 ， 怎么样 ？ ” 猴子 们 听 了 格外 生气 。', 'He told the monkeys: "From now on, three nuts in the morning and four at night. How\'s that?" The monkeys were furious.'],
          ['📖', '他 想 来 想 去 ， 又 说 ： “ 要不 早上 四 颗 ， 晚上 三 颗 吧 。 ” 猴子 们 立刻 高兴 起来 。', 'He thought it over and said: "Then how about four in the morning and three at night?" The monkeys were instantly happy.'],
          ['📖', '“ 朝三暮四 ” 原来 指 用 骗 人 的 方式 让 对方 上当 ， 如今 多 用来 形容 一 个 人 的 想法 经常 变化 。', 'Originally 朝三暮四 meant tricking someone; today it mostly describes someone who keeps changing their mind.'],
        ]},
        { scene: 'Pets', lines: [
          ['A', '你 养 宠物 吗 ？', 'Do you have a pet?'],
          ['B', '养 了 一 只 猫 ， 特别 调皮 。', 'A cat. Very mischievous.'],
          ['A', '我 倒 觉得 调皮 的 猫 更 可爱 。', 'Actually, I think naughty cats are cuter.'],
        ]},
      ],
      grammar: [
        { title: '倒 = actually (contrary to expectation)',
          body: '<b>倒</b> introduces a view or fact that goes against what was expected.',
          examples: [
            ['我 倒 觉得 调皮 的 猫 更 可爱 。', 'Actually, I think naughty cats are cuter.'],
          ]},
        { title: 'V 来 V 去 = (do) over and over',
          body: 'Repeating a verb with <b>来…去</b> shows an action done back and forth or repeatedly.',
          examples: [
            ['他 想 来 想 去 ， 还是 不 知道 怎么 办 。', "He thought it over and over, and still didn't know what to do."],
            ['他 在 房间 里 走 来 走 去 。', 'He paced up and down the room.'],
          ]},
        { title: '要不 = otherwise; how about …',
          body: '<b>要不</b> can suggest an alternative ("how about…") or mean "otherwise".',
          examples: [
            ['要不 早上 四 颗 ， 晚上 三 颗 吧 。', 'How about four in the morning and three at night?'],
            ['快 走 吧 ， 要不 就 迟到 了 。', "Let's go, otherwise we'll be late."],
          ]},
        { title: '彼此 vs 互相',
          body: '<b>彼此</b> is a pronoun, "each other", and can be an object or take 的: 彼此的想法. <b>互相</b> is only an adverb before a verb: 互相帮助.',
          examples: [
            ['他们 彼此 很 了解 。', 'They understand each other well.'],
            ['他们 互相 帮助 。', 'They help each other.'],
          ]},
      ],
    },

    {
      n: 9, zh: '别样鲁迅', en: 'A different Lu Xun',
      focus: 'Famous people · 算 · 作为 · 曾经 · 亲自 vs 自己',
      words: HSK.W5[9],
      dialogues: [
        { scene: 'Reading: Lu Xun at the table', lines: [
          ['📖', '鲁迅 是 中国 近代 最 著名 的 文学家 。 很 多 人 对 他 的 印象 是 ： 严肃 、 不 爱 笑 。', "Lu Xun is modern China's most famous writer. Many people picture him as stern and unsmiling."],
          ['📖', '可是 根据 资料 ， 生活 中 的 鲁迅 其实 很 好客 ， 也 很 大方 。', 'But according to records, in daily life Lu Xun was hospitable and generous.'],
          ['📖', '他 曾经 住 在 北京 的 胡同 里 ， 经常 呼朋唤友 ， 去 附近 的 饭馆 吃饭 。', "He once lived in a Beijing hutong and often gathered friends to eat at nearby restaurants."],
          ['📖', '他 胃口 很 好 ， 特别 喜欢 吃 甜 的 点心 ， 写作 的 时候 也 要 吃 。 他 抽烟 抽 得 很 多 ， 明明 知道 对 身体 不 好 ， 却 始终 戒 不 了{liǎo} 。', 'He had a good appetite and loved sweet pastries, even while writing. He smoked heavily; he obviously knew it was bad for him, yet never managed to quit.'],
          ['📖', '作为 一 个 大 文学家 ， 他 也 是 一 个 很 讲究 生活 的 普通 人 。', 'Great writer as he was, he was also an ordinary man who cared about the good things in life.'],
        ]},
        { scene: 'At a restaurant', lines: [
          ['服务员', '欢迎 光临 ！ 请 问 几 位 ？', 'Welcome! How many of you?'],
          ['A', '两 位 。 你们 这儿 的 菜 地道 吗 ？', 'Two. Is the food here authentic?'],
          ['服务员', '绝对 地道 ， 我们 厨师 每 天 亲自 去 市场 买 菜 。', 'Absolutely. Our chef goes to the market himself every day.'],
        ]},
      ],
      grammar: [
        { title: '算 = to count as, to be considered',
          body: '<b>算 (是)</b> = "can be regarded as". 算不上 = can\'t really be called.',
          examples: [
            ['这 个 饭馆 算 是 很 高档 的 了 。', 'This restaurant counts as quite upmarket.'],
          ]},
        { title: '作为 = as (in the role of)',
          body: '<b>作为 + role</b> at the start: "as a …".',
          examples: [
            ['作为 学生 ， 应该 努力 学习 。', 'As a student, you should study hard.'],
          ]},
        { title: '曾经 = once, at one time',
          body: '<b>曾经</b> = something happened in the past (and may no longer be true). Often with 过.',
          examples: [
            ['他 曾经 住 在 北京 。', 'He once lived in Beijing.'],
            ['我 曾经 学 过{guo} 钢琴 。', 'I once learned the piano.'],
          ]},
        { title: '亲自 vs 自己',
          body: '<b>亲自</b> (adverb) stresses doing something <b>in person</b> rather than sending someone else, often about important people. <b>自己</b> (pronoun) = oneself.',
          examples: [
            ['厨师 亲自 去 市场 买 菜 。', 'The chef goes to the market in person.'],
            ['这 件 事 你 自己 决定 吧 。', 'Decide this yourself.'],
          ]},
      ],
      culture: { title: 'Lu Xun (1881–1936)', body: '<b>鲁迅</b> is the pen name of Zhou Shuren, the founding figure of modern Chinese literature. He studied medicine in Japan but switched to writing, believing China needed to heal minds more than bodies. His stories, like 《狂人日记》 ("A Madman\'s Diary") and 《阿Q正传》 ("The True Story of Ah Q"), sharply criticise old society, and they are still read in every Chinese school.' },
    },

    {
      n: 10, zh: '争论的奇迹', en: 'The miracle of an argument',
      focus: 'Unit 4 · Science — 毕竟 · 逐渐 · 或许 · 显示 vs 显得',
      words: HSK.W5[10],
      dialogues: [
        { scene: 'Reading: does a galloping horse fly?', lines: [
          ['📖', '一八七二 年 ， 美国 加州 的 斯坦福 和 朋友 围绕 一 个 问题 发生 了 争论 ： 马 奔跑 的 时候 ， 四 只 脚 会 不 会 同时 离开 地面 ？', 'In 1872, Stanford in California argued with a friend: when a horse gallops, do all four hooves leave the ground at once?'],
          ['📖', '他们 谁 也 说服 不 了{liǎo} 谁 ， 于是 请求 摄影师 麦布里奇 来 帮忙 。', "Neither could persuade the other, so they asked the photographer Muybridge to help."],
          ['📖', '麦布里奇 在 跑道 旁边 摆 了 十二 台 照相机 ， 又 在 跑道 上 系 了 十二 根 细 绳子 。 马 跑 过 的 时候 碰 断 绳子 ， 照相机 就 一 张{zhāng} 一 张{zhāng} 地 拍 下来 。', 'Muybridge set up twelve cameras beside the track and tied twelve thin strings across it. As the horse ran, it broke the strings and the cameras took pictures one by one.'],
          ['📖', '照片 显示 ： 马 奔跑 时 ， 确实 有 四 只 脚 都 离开 地面 的 时刻 。', 'The photos showed that a galloping horse really does have all four hooves off the ground at one moment.'],
          ['📖', '后来 ， 人们 把 这些 照片 连续 播放 ， 马 就 “ 跑 ” 了 起来 。 这 或许 就 是 电影 最 早 的 样子 。 一 次 争论 ， 毕竟 带来 了 一 个 重大 的 奇迹 。', 'Later, when the photos were shown in quick succession, the horse "ran". This was perhaps the earliest form of film. An argument had, after all, brought about a great miracle.'],
        ]},
        { scene: 'A film', lines: [
          ['A', '这 部 电影 的 导演 是 谁 ？', "Who's the director of this film?"],
          ['B', '一 个 年轻 导演 ， 可是 拍 得 很 成熟 。', "A young one, but it's very maturely made."],
        ]},
      ],
      grammar: [
        { title: '毕竟 = after all',
          body: '<b>毕竟</b> points to the basic fact that explains or decides things.',
          examples: [
            ['他 毕竟 还 是 个 孩子 。', "He's only a child, after all."],
          ]},
        { title: '逐渐 = gradually',
          body: '<b>逐渐</b> = step by step, slowly changing.',
          examples: [
            ['天 逐渐 黑 了 。', 'It gradually got dark.'],
            ['他 的 汉语 水平 逐渐 提高 了 。', 'His Chinese gradually improved.'],
          ]},
        { title: '或许 = perhaps',
          body: '<b>或许</b> is a written "maybe" (= 也许).',
          examples: [
            ['这 或许 就 是 电影 最 早 的 样子 。', 'This was perhaps the earliest form of film.'],
          ]},
        { title: '显示 vs 显得',
          body: '<b>显示</b> = to show (data, results, screens), followed by an object or clause: 照片显示…. <b>显得</b> = to appear, seem, followed by an adjective: 她显得很高兴.',
          examples: [
            ['照片 显示 马 的 四 只 脚 都 离开 了 地面 。', 'The photos show all four hooves off the ground.'],
            ['她 今天 显得 很 高兴 。', 'She seems very happy today.'],
          ]},
      ],
    },

    {
      n: 11, zh: '闹钟的危害', en: 'The harm of alarm clocks',
      focus: 'Health & science · 醒过来 · 所 · 相当 · 数 · 持续 vs 继续',
      words: HSK.W5[11],
      dialogues: [
        { scene: 'Reading: waking up badly', lines: [
          ['📖', '现代 人 大多 靠 闹钟 叫 醒 自己 。 可是 专家 认为 ， 闹钟 对 人类 有 相当 大 的 危害 。', 'Most modern people rely on alarm clocks to wake up. But experts think alarm clocks do considerable harm.'],
          ['📖', '人 睡觉 时 有 深 睡 和 浅 睡 两 种 状态 。 如果 在 深 睡 时 被 铃 声 吵 醒 ， 人 会 很 慌张 。', 'Sleep has two states, deep and light. If a bell wakes you from deep sleep, you feel flustered.'],
          ['📖', '实验 显示 ， 这样 醒 过来 的 人 ， 一 天 的 情绪 都 比较 低落 ， 记忆 和 计算 能力 也 会 下降 ； 长期 下去 ， 还 可能 导致 失眠 。', "Experiments show that people woken this way are in a lower mood all day, and their memory and calculation skills drop; in the long run it can even cause insomnia."],
          ['📖', '所以 ， 专家 建议 睡觉 要 有 规律 ， 早上 打开 窗帘 ， 让 光线 慢慢 叫 醒 我们 。', 'So experts recommend regular sleep, and opening the curtains so light wakes us gradually.'],
          ['📖', '如今 市场 上 已经 有 数 种 能 模仿 日出 的 产品 了 。', 'There are now several products on the market that imitate sunrise.'],
        ]},
        { scene: 'Insomnia', lines: [
          ['A', '你 最近 精神 不 好 ， 怎么 了 ？', "You've looked tired lately. What's wrong?"],
          ['B', '失眠 ， 半夜 醒 过来 就 睡 不 着{zháo} 了 。', "Insomnia. If I wake in the night, I can't get back to sleep."],
          ['A', '有 必要 去 看 医生 ， 避免 这 种 情况 持续 下去 。', 'You need to see a doctor so this doesn\'t go on.'],
        ]},
      ],
      grammar: [
        { title: 'V + 过来 = back to a normal state',
          body: '<b>醒过来</b> (wake up), <b>明白过来</b> (come to understand), <b>活过来</b> (come back to life).',
          examples: [
            ['他 终于 明白 过来 了 。', 'He finally understood.'],
          ]},
        { title: '所 + verb (+ 的) = what …',
          body: 'Written: <b>(subject) 所 + verb + 的 (+ noun)</b> = "the thing that … ".',
          examples: [
            ['这 是 大家 所 希望 的 。', 'This is what everyone hopes for.'],
          ]},
        { title: '相当 = quite, considerably',
          body: '<b>相当 + adjective</b> = fairly, quite (stronger than 比较).',
          examples: [
            ['他 的 汉语 相当 好 。', 'His Chinese is quite good.'],
          ]},
        { title: '数 (shù) = several',
          body: '<b>数 + measure word</b> = several (written): 数种, 数年, 数百.',
          examples: [
            ['数 年 以后 ， 他 回 来 了 。', 'Several years later, he came back.'],
          ]},
        { title: '持续 vs 继续',
          body: '<b>持续</b> = a state lasts without a break: 持续下雨, 持续一个月. <b>继续</b> = to continue an action, possibly after a pause: 休息一下，我们继续.',
          examples: [
            ['大 雨 持续 了 三 天 。', 'The heavy rain lasted three days.'],
            ['休息 一下 ， 我们 继续 上课 。', "Let's take a break, then carry on with class."],
          ]},
      ],
    },

    {
      n: 12, zh: '海外用户玩儿微信', en: 'WeChat users abroad',
      focus: 'Technology & business · 以及 · 程度 · 发达 vs 发展',
      words: HSK.W5[12],
      dialogues: [
        { scene: 'Reading: WeChat goes global', lines: [
          ['📖', '微信 是 腾讯 开发 的 一 款 移动 应用 。 如今 ， 它 已经 不 只{zhǐ} 在 中国 流行 ， 在 海外 也 有 大量 用户 注册 。', 'WeChat is a mobile app developed by Tencent. It\'s no longer popular only in China: huge numbers of users abroad have signed up too.'],
          ['📖', '为了 推广 微信 ， 公司 针对 不同 国家 的 用户 开发 了 相关 的 功能 ， 并且 请 当地 明星 做 宣传 。', 'To promote WeChat, the company developed features for users in different countries and hired local stars for advertising.'],
          ['📖', '很 多 华裔 和 移民 用 微信 跟 家人 联系 ， 以及 经营 自己 的 小 生意 。', 'Many overseas Chinese and immigrants use WeChat to keep in touch with family, as well as to run small businesses.'],
          ['📖', '可见 ， 一 个 企业 的 地位 ， 在 很 大 程度 上 取决于 它 能 不 能 走 向 世界 。', "Clearly, a company's status depends to a large extent on whether it can go global."],
        ]},
        { scene: 'A cat video', lines: [
          ['A', '你 的 宝贝 女儿 在 干 什么 ？', 'What is your little girl doing?'],
          ['B', '她 在 用 手机 逗 猫 ， 还 要 拍 视频 发 到 网上 。', "She's playing with the cat using her phone, and wants to post a video online."],
        ]},
      ],
      grammar: [
        { title: '以及 = and, as well as (written)',
          body: '<b>以及</b> joins the last item of a list, or a second, less important part.',
          examples: [
            ['桌子 、 椅子 以及 其他 家具 。', 'Tables, chairs, and other furniture.'],
          ]},
        { title: '程度 = degree, level',
          body: '<b>在很大程度上</b> = to a large extent. <b>…的程度</b> = the level of….',
          examples: [
            ['这 在 很 大 程度 上 取决于 你 自己 。', 'This depends to a large extent on you.'],
          ]},
        { title: '发达 vs 发展',
          body: '<b>发达</b> is an adjective, "developed": 发达国家, 经济很发达. <b>发展</b> is a verb or noun, "(to) develop / development": 发展经济, 快速发展.',
          examples: [
            ['这 个 国家 的 经济 很 发达 。', "This country's economy is highly developed."],
            ['中国 发展 得 很 快 。', 'China is developing fast.'],
          ]},
      ],
      culture: { title: 'Red envelopes on WeChat', body: 'In 2014 WeChat added digital <b>红包</b> (red envelopes). On New Year\'s Eve, people send small sums into group chats, and friends race to <b>抢红包</b> ("grab the red envelope"), with random amounts for each person. Hundreds of millions take part every year, turning an old custom into a game.' },
    },

    {
      n: 13, zh: '锯掉生活的“筐底”', en: 'Saw off the "bottom of the basket" in life',
      focus: 'Unit 5 · Seeing the world — 何况 · 何必 · 多亏 · 激烈 vs 强烈',
      words: HSK.W5[13],
      dialogues: [
        { scene: 'Reading: how basketball lost its bottom', lines: [
          ['📖', '一八九一 年 ， 美国 的 一 位 体育 老师 发明 了 篮球 。 他 把 两 个 装 桃 的 筐 钉 在 墙 上 ， 让 学生 往 里 投篮 。', 'In 1891 an American PE teacher invented basketball. He nailed two peach baskets to the wall and had students shoot into them.'],
          ['📖', '每 次 投 进 一 个 球 ， 都 要 有 人 踩 着 梯子 把 球 拿 出来 ， 比赛 只好 断断续续 地 进行 。', 'Every time someone scored, a person had to climb a ladder to get the ball out, so games went on in fits and starts.'],
          ['📖', '这样 重复 了 很 多 年 ， 大家 仿佛 都 觉得 很 正常 。 后来 有 一 位 工程师 发明 了 一 种 机器 ， 可以 把 球 弹 出来 ， 但 仍然 很 麻烦 。', 'This went on for years, and everyone seemed to think it normal. Then an engineer invented a machine to pop the ball out, but it was still a nuisance.'],
          ['📖', '终于 有 一 天 ， 一 个 人 受到 启发 ： 何必 要 筐底 呢 ？ 把 筐底 锯 掉 就 行 了 ！', 'Finally one day someone had a flash of inspiration: why have a basket bottom at all? Just saw it off!'],
          ['📖', '多亏 了 这 个 简单 的 主意 ， 篮球 比赛 才 变 得 像 现在 这样 激烈 、 好看 。', 'Thanks to that simple idea, basketball became the intense, exciting game it is today.'],
        ]},
        { scene: 'Little players', lines: [
          ['A', '瞧 ， 幼儿园 的 孩子 们 也 在 练 投篮 ！', 'Look, even the kindergarten kids are practising shooting!'],
          ['B', '连 孩子 都 喜欢 篮球 ， 何况 我们 呢 ？', "If even kids love basketball, how much more do we!"],
        ]},
      ],
      grammar: [
        { title: '何况 = let alone, all the more',
          body: '<b>何况</b> introduces a case that follows even more strongly from what came before.',
          examples: [
            ['大人 都 做 不 到 ， 何况 孩子 呢 ？', "Even adults can't do it, let alone children."],
          ]},
        { title: '何必 = why bother, there\'s no need',
          body: '<b>何必 … (呢)?</b> is a rhetorical question: "why should you…?"',
          examples: [
            ['你 何必 生气 呢 ？', "There's no need to be angry."],
          ]},
        { title: '多亏 = thanks to (luckily)',
          body: '<b>多亏</b> credits the person or thing that helped you avoid a bad result.',
          examples: [
            ['多亏 你 帮 我 ， 要不 我 就 迟到 了 。', "Thanks to your help. Otherwise I'd have been late."],
          ]},
        { title: '激烈 vs 强烈',
          body: '<b>激烈</b> = fierce, intense (competition, debate, action): 比赛很激烈. <b>强烈</b> = strong (feelings, light, wishes, reactions): 强烈的阳光, 强烈的愿望.',
          examples: [
            ['比赛 非常 激烈 。', 'The match was very intense.'],
            ['他 有 强烈 的 愿望 。', 'He has a strong wish.'],
          ]},
      ],
    },

    {
      n: 14, zh: '北京的四合院', en: "Beijing's courtyard houses",
      focus: 'Architecture · 所谓 · 则 · 为…所… · 说起 · 通常 vs 常常',
      words: HSK.W5[14],
      dialogues: [
        { scene: 'Reading: the siheyuan', lines: [
          ['📖', '四合院 是 北京 传统 建筑 的 代表 。 所谓 “ 四合 ” ， 就 是 东 、 西 、 南 、 北 四 面 的 房子 组合 在 一起 ， 中间 是 一 个 方 的 院子 。', 'The siheyuan is a classic example of traditional Beijing architecture. "Si he" means houses on four sides, east, west, south and north, around a square courtyard.'],
          ['📖', '通常 ， 长辈 住 在 北 边 的 房子 ， 年轻 人 则 住 在 东 西 两 边 。', 'Usually the elders live in the north house, while the younger generation lives on the east and west sides.'],
          ['📖', '大 门 关闭 以后 ， 院子 就 成 了 一 个 安静 的 空间 。 院子 里 常常 种{zhòng} 着 竹子 和 花 ， 生活 气氛 很 浓 。', 'With the gate shut, the courtyard becomes a quiet space. It is often planted with bamboo and flowers, and full of the feel of home life.'],
          ['📖', '四合院 的 样式 为{wéi} 很 多 人 所 喜爱 ， 因而 至今 仍然 有 很 多 人 愿意 住 在 里面 。', 'The siheyuan style is loved by many, so plenty of people still want to live in one today.'],
          ['📖', '不过 ， 现代 人 的 日常 生活 需要 更 多 的 功能 ， 老 房子 和 新 需求 之间 也 存在 一些 矛盾 。', "However, modern daily life needs more facilities, so there is some conflict between old houses and new needs."],
        ]},
        { scene: 'Beijing', lines: [
          ['A', '说 起 北京 ， 你 最 喜欢 什么 ？', 'Speaking of Beijing, what do you like most?'],
          ['B', '当然 是 胡同 和 四合院 ， 那儿 的 人 特别 亲切 。', 'The hutongs and courtyard houses, of course. The people there are so friendly.'],
        ]},
      ],
      grammar: [
        { title: '所谓 = so-called; what is called',
          body: '<b>所谓 X，就是…</b> explains a term. It can also be sceptical: 所谓的专家 = a so-called expert.',
          examples: [
            ['所谓 “ 四合 ” ， 就 是 四 面 的 房子 。', '"Si he" means the houses on four sides.'],
          ]},
        { title: '则 = while, whereas (written)',
          body: '<b>则</b> sits after the subject of the second clause to show contrast.',
          examples: [
            ['长辈 住 北 边 ， 年轻 人 则 住 东 西 两 边 。', 'Elders live on the north side, while young people live east and west.'],
          ]},
        { title: '为 (wéi) … 所 … = be …-ed by (written passive)',
          body: '<b>A 为 B 所 + verb</b> = A is (verb)-ed by B. It is a formal version of 被.',
          examples: [
            ['四合院 为{wéi} 很 多 人 所 喜爱 。', 'The siheyuan is loved by many people.'],
          ]},
        { title: 'V + 起 = to mention, speak of',
          body: '<b>说起 / 提起 / 谈起</b> + topic = "speaking of…".',
          examples: [
            ['说 起 北京 ， 你 最 喜欢 什么 ？', 'Speaking of Beijing, what do you like best?'],
          ]},
        { title: '通常 vs 常常',
          body: '<b>通常</b> = normally, as a rule; it can start a sentence and describe general patterns. <b>常常</b> = often (frequency), and it goes after the subject.',
          examples: [
            ['通常 ， 长辈 住 在 北 边 。', 'Normally, the elders live in the north.'],
            ['他 常常 去 胡同 散步 。', 'He often takes walks in the hutongs.'],
          ]},
      ],
    },

    {
      n: 15, zh: '纸上谈兵', en: 'Fighting a war on paper',
      focus: 'History · 过 (too) · 迟早 · 再三 · 胜利 vs 成功',
      words: HSK.W5[15],
      dialogues: [
        { scene: 'Reading: Zhao Kuo', lines: [
          ['📖', '战国 时期 ， 赵国 有 一 位 名将 叫 赵奢 。 他 的 儿子 赵括 从 小 读 了 很 多 军事 书 ， 谈 起 理论 来 ， 连 父亲 也 说 不 过 他 。', 'In the Warring States period, the state of Zhao had a famous general, Zhao She. His son Zhao Kuo read many military books from childhood; when it came to theory, not even his father could out-argue him.'],
          ['📖', '可是 赵奢 却 说 ： “ 打仗 是 关系 生死 的 事 ， 他 把 它 说 得 过于 容易 ， 迟早 会 出 问题 。 ”', 'But Zhao She said: "War is a matter of life and death. He makes it sound far too easy; sooner or later it will go wrong."'],
          ['📖', '后来 秦国 攻打 赵国 ， 大将 廉颇 采取 守 的 方案 ， 秦国 一直 没 能 胜利 。 秦国 便 派 人 骂 廉颇 是 胆小鬼 。', 'Later the state of Qin attacked Zhao. General Lian Po chose to defend, and Qin could not win. So Qin sent people to call Lian Po a coward.'],
          ['📖', '赵王 上当 了 ， 不顾 大臣 再三 阻止 ， 命令 赵括 代替 廉颇 。 赵括 只{zhǐ} 懂 书 上 的 理论 ， 不 会 根据 形势 灵活 作战 ， 结果 被 敌人 打败 了 。', "The King of Zhao fell for it and, ignoring his ministers' repeated objections, ordered Zhao Kuo to replace Lian Po. Zhao Kuo only knew book theory, couldn't adapt to the situation, and was defeated."],
          ['📖', '后来 人们 用 “ 纸上谈兵 ” 讽刺 只{zhǐ} 会 讲 理论 、 不 会 解决 实际 问题 的 人 。', 'Since then, 纸上谈兵 ("fighting on paper") has been used to mock people who can talk theory but can\'t solve real problems.'],
        ]},
        { scene: 'Before the match', lines: [
          ['A', '你 别 轻视 对手 ， 他们 可 不 弱 。', "Don't underestimate the other team. They're not weak at all."],
          ['B', '放心 ， 我们 已经 准备 了 好 几 个 方案 。', "Don't worry, we've prepared several plans."],
        ]},
      ],
      grammar: [
        { title: '过 / 过于 + adjective = too, excessively',
          body: '<b>过于 + adjective</b> (written) or <b>过 + one-syllable adjective</b> (过多, 过长) = too much.',
          examples: [
            ['他 把 打仗 说 得 过于 容易 。', 'He makes war sound far too easy.'],
            ['你 不 要 过 多 地 担心 。', "Don't worry too much."],
          ]},
        { title: '迟早 = sooner or later',
          body: '<b>迟早</b> = it is bound to happen eventually.',
          examples: [
            ['这 件 事 他 迟早 会 知道 的 。', "He'll find out sooner or later."],
          ]},
        { title: '再三 = again and again',
          body: '<b>再三</b> = repeatedly (asking, warning, thinking).',
          examples: [
            ['老师 再三 提醒 我们 。', 'The teacher reminded us again and again.'],
          ]},
        { title: '胜利 vs 成功',
          body: '<b>胜利</b> = victory: winning <b>against</b> an opponent (battle, match, election). <b>成功</b> = success: achieving a goal (experiment, plan, career).',
          examples: [
            ['我们 队 胜利 了 ！', 'Our team won!'],
            ['实验 成功 了 。', 'The experiment was a success.'],
          ]},
      ],
    },

    {
      n: 16, zh: '体重与节食', en: 'Weight and dieting',
      focus: 'Unit 6 · Body and mind — 即 · 个别 · 非 · 临时 vs 暂时',
      words: HSK.W5[16],
      dialogues: [
        { scene: 'Reading: does dieting work?', lines: [
          ['📖', '据 报道 ， 越来越 多 的 年轻 人 为了 苗条 而 节食 。', 'According to reports, more and more young people are dieting to be slim.'],
          ['📖', '两 所 大学 的 研究 人员 联合 做 了 一 项 调查 ， 总共 有 一千 名 志愿者 参与 。', 'Researchers from two universities carried out a joint study with a total of 1,000 volunteers.'],
          ['📖', '分析 表明 ， 节食 的 人 体重 虽然 短期 内 下降 得 很 明显 ， 可是 一 年 以后 ， 大 部分 人 的 体重 又 升 了 回来 。 这 种 现象 即 所谓 的 “ 反弹 ” 。', "The analysis showed that although dieters lose weight noticeably in the short term, a year later most have put it back on. This is the so-called \"rebound\"."],
          ['📖', '专家 认为 ， 节食 并 非 可靠 的 减肥 措施 ， 还 可能 导致 营养 不足 。 相对 来说 ， 多 运动 、 吃 得 健康 ， 才 能 取得 长期 的 成果 。', 'Experts believe dieting is not a reliable way to lose weight and can lead to poor nutrition. By comparison, exercise and healthy eating are what bring long-term results.'],
        ]},
        { scene: 'The gym', lines: [
          ['A', '你 今天 又 不 去 健身房 ？ 别 找 借口 了 ！', "You're skipping the gym again today? Stop making excuses!"],
          ['B', '我 临时 有 事 ， 明天 立即 去 。', "Something's just come up. I'll go first thing tomorrow."],
        ]},
      ],
      grammar: [
        { title: '即 = that is, namely (written)',
          body: '<b>即</b> = 就是 in formal writing.',
          examples: [
            ['这 种 现象 即 所谓 的 “ 反弹 ” 。', 'This phenomenon is the so-called "rebound".'],
          ]},
        { title: '个别 = a very few; individual',
          body: '<b>个别</b> = only one or two, exceptional cases.',
          examples: [
            ['只{zhǐ} 有 个别 人 没 来 。', 'Only one or two people didn\'t come.'],
          ]},
        { title: '非 = not (written)',
          body: '<b>非</b> = 不是: 并非 (not at all), 非…不可 (must).',
          examples: [
            ['节食 并 非 可靠 的 措施 。', 'Dieting is by no means a reliable method.'],
          ]},
        { title: '临时 vs 暂时',
          body: '<b>临时</b> = at the last minute, or a short-term arrangement: 临时有事, 临时工作. <b>暂时</b> = for the time being (it may change later): 暂时不用.',
          examples: [
            ['我 临时 有 事 ， 不 能 去 了 。', "Something's just come up; I can't go."],
            ['这 本 书 我 暂时 不 用 。', "I don't need this book for now."],
          ]},
      ],
    },

    {
      n: 17, zh: '在最美好的时刻离开', en: 'Leave at the best moment',
      focus: 'Psychology · 以 · 平常 · 宁可 · 忽视 vs 轻视',
      words: HSK.W5[17],
      dialogues: [
        { scene: 'Reading: the peak-end rule', lines: [
          ['📖', '心理学家 卡内曼 发现 ， 人们 对 一 件 事物 的 评价 ， 并 不 等于 整个 过程 的 平均 感受 。', 'The psychologist Kahneman found that how people judge an experience is not the same as how they felt on average throughout it.'],
          ['📖', '人们 记住 的 ， 往往 只{zhǐ} 是 最 好 的 时刻 和 最后 的 时刻 ， 这 就 是 “ 峰终 定律 ” 。', 'What people remember is usually just the best moment and the last moment: the "peak-end rule".'],
          ['📖', '比如 ， 一 场 戏剧 即使 中间 有 一些 糟糕 的 地方 ， 只要 结尾 精彩 ， 观众 依然 会 留 下 深刻 的 印象 。', "For example, even if a play has some bad parts in the middle, as long as the ending is brilliant, the audience will still be deeply impressed."],
          ['📖', '一 次 婚礼 ， 一 个 开幕式 ， 甚至 一 个 平常 的 周末 ， 都 可以 运用 这 个 规律 。 所以 ， 我 宁可 在 最 美好 的 时刻 离开 。', 'A wedding, an opening ceremony, even an ordinary weekend can all use this rule. So I would rather leave at the best moment.'],
        ]},
        { scene: 'A recommendation', lines: [
          ['A', '这 部 电影 你 推荐 吗 ？', 'Would you recommend this film?'],
          ['B', '推荐 ！ 演员 很 投入 ， 服装 也 很 有 魅力 。', 'Yes! The actors are fully committed and the costumes are gorgeous.'],
          ['A', '那 我 争取 这 个 周末 去 看 。', "Then I'll try to see it this weekend."],
        ]},
      ],
      grammar: [
        { title: '以 = with, by, in (a manner)',
          body: 'Written: <b>以 + manner/means + verb</b>.',
          examples: [
            ['他 以 最 快 的 速度 跑 了 过去 。', 'He ran over as fast as he could.'],
          ]},
        { title: '平常 = ordinary; normally',
          body: 'As an adjective, <b>平常</b> = ordinary; as a time word, it means usually.',
          examples: [
            ['这 只{zhǐ} 是 一 个 平常 的 周末 。', 'It was just an ordinary weekend.'],
            ['他 平常 七 点 起床 。', 'He normally gets up at seven.'],
          ]},
        { title: '宁可 … 也 … = would rather …',
          body: '<b>宁可 A 也 (不) B</b>: choose A (unpleasant) rather than B.',
          examples: [
            ['我 宁可 走 路 ， 也 不 坐 那么 挤 的 车 。', "I'd rather walk than take such a crowded bus."],
          ]},
        { title: '忽视 vs 轻视',
          body: '<b>忽视</b> = overlook, ignore (not pay attention): 不能忽视健康. <b>轻视</b> = look down on, underestimate: 不要轻视对手.',
          examples: [
            ['我们 不 能 忽视 健康 。', "We can't ignore our health."],
            ['不 要 轻视 对手 。', "Don't underestimate your opponent."],
          ]},
      ],
    },

    {
      n: 18, zh: '抽象艺术美不美', en: 'Is abstract art beautiful?',
      focus: 'Art · 极其 · 其余 · 可见 · 哪怕 · 目前 vs 现在',
      words: HSK.W5[18],
      dialogues: [
        { scene: 'Reading: could a child paint that?', lines: [
          ['📖', '很 多 人 在 欣赏 抽象 艺术 的 时候 会 问 ： 这 也 算 艺术 吗 ？ 我 随手 画 的 也 差不多 ！', 'Looking at abstract art, many people ask: is this really art? What I scribble looks about the same!'],
          ['📖', '为了 回答 这 个 话题 ， 研究 人员 设计 了 一 个 实验 。 他们 把 著名 画家 的 作品 和 业余 画家 、 甚至 孩子 的 画 一 组 一 组 地 放 在 一起 ， 请 大家 选择 。', 'To answer this, researchers designed an experiment. They put famous painters\' works in pairs with paintings by amateurs and even children, and asked people to choose.'],
          ['📖', '事实 表明 ， 哪怕 没有 签 名 ， 大 部分 人 依然 会 选 出 著名 画家 的 作品 。 研究 人员 又 调整 了 画 的 位置 ， 其余 的 人 也 做 出 了 同样 的 选择 。', 'The results showed that even without signatures, most people still picked the famous painters\' works. When the researchers rearranged the positions, the rest also made the same choice.'],
          ['📖', '可见 ， 抽象 艺术 并 不 是 随手 在 布 上 洒 几 滴 颜色 那么 简单 ， 它 有 自己 的 规则 。', "Clearly, abstract art isn't as simple as splashing a few drops of paint on canvas. It has its own rules."],
        ]},
        { scene: 'In a gallery', lines: [
          ['A', '你 觉得 这 幅 画 美 不 美 ？', 'Do you think this painting is beautiful?'],
          ['B', '说 实话 ， 我 看 不 懂 ， 不过 颜色 极其 活跃 。', "To be honest, I don't get it, but the colours are extremely lively."],
        ]},
      ],
      grammar: [
        { title: '极其 = extremely (written)',
          body: '<b>极其</b> usually goes before a two-syllable adjective or verb.',
          examples: [
            ['这 件 事 极其 重要 。', 'This is extremely important.'],
          ]},
        { title: '其余 = the rest, the others',
          body: '<b>其余 (的)</b> = everything or everyone else apart from those mentioned.',
          examples: [
            ['其余 的 人 也 做 出 了 同样 的 选择 。', 'The rest made the same choice.'],
          ]},
        { title: '可见 = so it can be seen that',
          body: '<b>可见</b> draws a conclusion from what has just been said.',
          examples: [
            ['他 一 句 话 也 没 说 ， 可见 很 生气 。', "He didn't say a word, so he must be angry."],
          ]},
        { title: '哪怕 … 也 … = even if',
          body: '<b>哪怕</b> is a spoken, emphatic 即使.',
          examples: [
            ['哪怕 没有 签 名 ， 大家 也 能 认 出来 。', 'Even without a signature, people can recognise it.'],
          ]},
        { title: '目前 vs 现在',
          body: '<b>目前</b> = at present: the current period, formal. <b>现在</b> = now: any time, including this very minute (现在几点？). You can\'t use 目前 for clock time.',
          examples: [
            ['目前 ， 这 种 方法 还 很 少 见 。', 'At present this method is still rare.'],
            ['现在 几 点 了 ？', 'What time is it now?'],
          ]},
      ],
      culture: { title: 'Traditional Chinese painting', body: 'Classical <b>国画 (guóhuà)</b> is painted with brush and ink on rice paper or silk. The <b>写意 (xiěyì)</b> style values the spirit of a subject over exact likeness, a bit like abstract art, while <b>工笔 (gōngbǐ)</b> is fine and detailed. Painting, calligraphy and poetry were long seen as one art, so many paintings carry a poem and the painter\'s red seal.' },
    },
  ],

  extra: [
    ['听众', 'tīng zhòng', 'listeners; audience', ''], ['老公', 'lǎo gōng', 'husband (informal)', ''],
    ['自从', 'zì cóng', 'since', ''], ['汽车', 'qì chē', 'car; bus', ''], ['串', 'chuàn', 'bunch; string (measure word)', ''],
    ['城里', 'chéng lǐ', 'in town', ''], ['晒晒', 'shài shai', 'air in the sun', ''], ['偷偷', 'tōu tōu', 'secretly', ''],
    ['翟峰', 'Zhái Fēng', 'Zhai Feng (a name)', ''], ['住房', 'zhù fáng', 'housing', ''], ['帆船', 'fān chuán', 'sailing boat', ''],
    ['新西兰', 'Xīn xī lán', 'New Zealand', ''], ['海', 'hǎi', 'sea', ''], ['海边', 'hǎi biān', 'seaside', ''], ['吸烟', 'xī yān', 'to smoke', ''],
    ['子路', 'Zǐ lù', 'Zilu (a disciple of Confucius)', ''], ['孔子', 'Kǒng zǐ', 'Confucius', ''], ['春秋', 'Chūn qiū', 'Spring and Autumn period', ''],
    ['足够', 'zú gòu', 'enough', ''], ['大部分', 'dà bù fen', 'most', ''],
    ['济南', 'Jǐ nán', 'Jinan', ''], ['处', 'chù', 'place; (measure) spots', ''], ['泉城', 'Quán chéng', 'City of Springs', ''], ['趵突泉', 'Bào tū quán', 'Baotu Spring', ''],
    ['地下', 'dì xià', 'underground', ''], ['水花', 'shuǐ huā', 'spray; jet of water', ''], ['诗人', 'shī rén', 'poet', ''], ['恶', 'è', 'evil', ''],
    ['名片', 'míng piàn', 'business card; calling card', ''], ['夕', 'Xī', 'Xi (a monster)', ''], ['怪物', 'guài wu', 'monster', ''],
    ['贴', 'tiē', 'to stick', ''], ['从此', 'cóng cǐ', 'from then on', ''], ['全家', 'quán jiā', 'the whole family', ''], ['过年', 'guò nián', 'to celebrate New Year', ''],
    ['问好', 'wèn hǎo', 'to send regards', ''], ['落', 'luò', 'to fall', ''], ['瞎子', 'xiā zi', 'blind person', ''], ['得', 'dé', 'to get; to obtain', ''],
    ['西汉', 'Xī hàn', 'Western Han dynasty', ''], ['射箭', 'shè jiàn', 'archery', ''], ['将军', 'jiāng jūn', 'general', ''], ['李广', 'Lǐ Guǎng', 'Li Guang (a general)', ''],
    ['射', 'shè', 'to shoot', ''], ['箭', 'jiàn', 'arrow', ''], ['进去', 'jìn qu', 'to go in', ''], ['上海', 'Shàng hǎi', 'Shanghai', ''],
    ['宋国', 'Sòng guó', 'the state of Song', ''], ['养', 'yǎng', 'to raise; keep (animals)', ''], ['朝三暮四', 'zhāo sān mù sì', 'to keep changing one\'s mind', ''],
    ['用来', 'yòng lái', 'to be used for', ''], ['想法', 'xiǎng fǎ', 'idea; way of thinking', ''], ['鲁迅', 'Lǔ Xùn', 'Lu Xun (a writer)', ''],
    ['严肃', 'yán sù', 'serious; stern', ''], ['饭馆', 'fàn guǎn', 'restaurant', ''], ['普通', 'pǔ tōng', 'ordinary', ''], ['厨师', 'chú shī', 'chef', ''],
    ['钢琴', 'gāng qín', 'piano', ''], ['加州', 'Jiā zhōu', 'California', ''], ['斯坦福', 'Sī tǎn fú', 'Stanford', ''], ['麦布里奇', 'Mài bù lǐ qí', 'Muybridge', ''],
    ['奔跑', 'bēn pǎo', 'to gallop; run', ''], ['地面', 'dì miàn', 'ground', ''], ['跑道', 'pǎo dào', 'track', ''], ['细', 'xì', 'thin; fine', ''],
    ['带来', 'dài lái', 'to bring about', ''], ['部', 'bù', 'measure word for films', ''], ['大多', 'dà duō', 'mostly', ''], ['下降', 'xià jiàng', 'to fall; drop', ''],
    ['长期', 'cháng qī', 'long-term', ''], ['打开', 'dǎ kāi', 'to open', ''], ['日出', 'rì chū', 'sunrise', ''], ['腾讯', 'Téng xùn', 'Tencent', ''],
    ['款', 'kuǎn', 'measure word for models/products', ''], ['海外', 'hǎi wài', 'overseas', ''], ['大量', 'dà liàng', 'a large amount', ''],
    ['用户', 'yòng hù', 'user', ''], ['不同', 'bù tóng', 'different', ''], ['取决于', 'qǔ jué yú', 'to depend on', ''], ['视频', 'shì pín', 'video', ''],
    ['发明', 'fā míng', 'to invent', ''], ['篮球', 'lán qiú', 'basketball', ''], ['筐', 'kuāng', 'basket', ''], ['钉', 'dìng', 'to nail', ''],
    ['梯子', 'tī zi', 'ladder', ''], ['筐底', 'kuāng dǐ', 'bottom of a basket', ''], ['锯', 'jù', 'to saw', ''], ['四合院', 'sì hé yuàn', 'courtyard house', ''],
    ['院子', 'yuàn zi', 'courtyard', ''], ['喜爱', 'xǐ ài', 'to love; be fond of', ''], ['里面', 'lǐ mian', 'inside', ''], ['需求', 'xū qiú', 'need; demand', ''],
    ['战国', 'Zhàn guó', 'Warring States period', ''], ['赵国', 'Zhào guó', 'the state of Zhao', ''], ['名将', 'míng jiàng', 'famous general', ''],
    ['赵奢', 'Zhào Shē', 'Zhao She', ''], ['赵括', 'Zhào Kuò', 'Zhao Kuo', ''], ['打仗', 'dǎ zhàng', 'to fight a war', ''], ['生死', 'shēng sǐ', 'life and death', ''],
    ['过于', 'guò yú', 'too; excessively', ''], ['秦国', 'Qín guó', 'the state of Qin', ''], ['攻打', 'gōng dǎ', 'to attack', ''], ['大将', 'dà jiàng', 'general', ''],
    ['廉颇', 'Lián Pō', 'Lian Po', ''], ['守', 'shǒu', 'to defend', ''], ['赵王', 'Zhào wáng', 'King of Zhao', ''], ['不顾', 'bú gù', 'regardless of', ''],
    ['大臣', 'dà chén', 'minister', ''], ['代替', 'dài tì', 'to replace', ''], ['打败', 'dǎ bài', 'to defeat', ''], ['纸上谈兵', 'zhǐ shàng tán bīng', 'armchair strategy', ''],
    ['据', 'jù', 'according to', ''], ['短期', 'duǎn qī', 'short-term', ''], ['反弹', 'fǎn tán', 'rebound', ''], ['相对来说', 'xiāng duì lái shuō', 'relatively speaking', ''],
    ['取得', 'qǔ dé', 'to obtain; achieve', ''], ['健身房', 'jiàn shēn fáng', 'gym', ''], ['心理学家', 'xīn lǐ xué jiā', 'psychologist', ''],
    ['卡内曼', 'Kǎ nèi màn', 'Kahneman', ''], ['记住', 'jì zhu', 'to remember', ''], ['峰终', 'fēng zhōng', 'peak-end', ''], ['定律', 'dìng lǜ', 'law; rule', ''],
    ['结尾', 'jié wěi', 'ending', ''], ['挤', 'jǐ', 'crowded', ''], ['画家', 'huà jiā', 'painter', ''], ['同样', 'tóng yàng', 'the same', ''],
    ['滴', 'dī', 'drop (measure word)', ''], ['实话', 'shí huà', 'the truth', ''], ['少见', 'shǎo jiàn', 'rare', ''], ['名', 'míng', 'name; (measure word for people)', ''],
  ],
});
