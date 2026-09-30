/* HSK 4 course data (Books 4A + 4B).
 * Lesson order, word lists and grammar topics follow HSK Standard Course 4;
 * word lists live in hsk4-words.js (generated from the books' vocabulary index).
 * All dialogues, passages, explanations and examples are original.
 * A scene whose speaker is 📖 is a short reading passage.
 */
HSK.registerLevel({
  level: 4,
  title: 'HSK 4',
  subtitle: '1,200 words · opinions, work & society',
  book: 'HSK Standard Course 4A + 4B',
  lessons: [
    {
      n: 1, zh: '简单的爱情', en: 'Simple love',
      focus: 'Love & marriage · 不仅…而且 · 从来 · 刚 · 即使…也 · 在…上',
      words: HSK.W4[1],
      dialogues: [
        { scene: 'How did you meet?', lines: [
          ['A', '你们 俩 是 怎么 认识 的 ？', 'How did you two meet?'],
          ['B', '在 朋友 的 聚会 上 。 他 很 幽默 ， 给 我 的 印象 很 深 。', "At a friend's party. He's funny, and he made a strong impression on me."],
          ['A', '你 喜欢 他 什么 ？', 'What do you like about him?'],
          ['B', '他 不仅 性格 好 ， 而且 从来 不 发 脾气 。', 'Not only does he have a good personality, he never loses his temper.'],
        ]},
        { scene: 'Getting married', lines: [
          ['A', '我们 下 个 月 就 要 结婚 了 ！', "We're getting married next month!"],
          ['B', '真 的 吗 ？ 你们 刚 认识 半 年 啊 。', 'Really? You only met half a year ago.'],
          ['A', '时间 不 长 ， 可是 我们 有 很 多 共同 的 爱好 ， 性格 也 很 适合 。', "It hasn't been long, but we share many hobbies and our personalities suit each other."],
          ['B', '我 真 羡慕 你们 ， 祝 你们 幸福 ！', 'I really envy you. I wish you happiness!'],
        ]},
        { scene: 'What is romantic?', lines: [
          ['A', '你 觉得 什么 是 浪漫 ？', 'What do you think is romantic?'],
          ['B', '即使 没有 花 和 礼物 ， 两 个 人 一起 看 星星 也 很 浪漫 。', 'Even without flowers and gifts, two people looking at the stars together is romantic.'],
          ['A', '你 丈夫 经常 加班 ， 你 不 生气 吗 ？', "Your husband often works late. Doesn't that make you angry?"],
          ['B', '每 个 人 都 有 缺点 ， 我 能 接受 。', 'Everyone has faults. I can accept it.'],
        ]},
        { scene: 'Reading: why two people stay together', lines: [
          ['📖', '很 多 人 问 ： 为什么 两 个 人 会 在 一起 ？', 'Many people ask: why do two people end up together?'],
          ['📖', '原因 其实 很 简单 ： 他们 互相 吸引 ， 互相 理解 。', 'The reason is actually simple: they attract each other and understand each other.'],
          ['📖', '即使 生活 不 浪漫 ， 只要 两 个 人 在 一起 很 幸福 ， 就 够 了 。', "Even if life isn't romantic, as long as the two are happy together, that's enough."],
          ['📖', '好 的 爱情 往往 很 自然 ， 也 很 让 人 感动 。', 'Good love is often natural, and very moving.'],
        ]},
      ],
      grammar: [
        { title: '不仅 … 也 / 还 / 而且 … = not only … but also …',
          body: '<b>不仅</b> is a slightly more formal <b>不但</b>. The second half adds more with <b>而且 / 也 / 还</b>.',
          examples: [
            ['他 不仅 性格 好 ， 而且 很 幽默 。', "He not only has a good personality, he's also funny."],
            ['这 本 书 不仅 我 喜欢 ， 我 妈妈 也 喜欢 。', 'Not only do I like this book, my mum likes it too.'],
          ]},
        { title: '从来 + 不 / 没 = never (ever)',
          body: '<b>从来不</b> = never does (habit). <b>从来没 + verb + 过</b> = has never done.',
          examples: [
            ['他 从来 不 发 脾气 。', 'He never loses his temper.'],
            ['我 从来 没 去 过{guo} 北京 。', "I've never been to Beijing."],
          ]},
        { title: '刚 vs 刚才',
          body: '<b>刚</b> (adverb, before the verb) = "just; only a short time ago", and it can cover weeks or months. <b>刚才</b> (time word) = "a moment ago" only. You can say 刚认识半年 but not 刚才认识半年.',
          examples: [
            ['你们 刚 认识 半 年 。', "You've only known each other half a year."],
            ['他 刚才 还 在 这儿 。', 'He was here a moment ago.'],
          ]},
        { title: '即使 … 也 … = even if …, (still) …',
          body: 'The first part is a condition (often imagined); the second says the result doesn\'t change.',
          examples: [
            ['即使 下雨 ， 我 也 要 去 。', "Even if it rains, I'll still go."],
            ['即使 没有 礼物 ， 我 也 很 高兴 。', "Even without a present, I'm happy."],
          ]},
        { title: '(在) … 上 = in terms of, at (an event)',
          body: '<b>在…上</b> can mark an event (在聚会上 = at the party) or an area (在生活上 = in daily life, 在这个问题上 = on this question).',
          examples: [
            ['我们 在 朋友 的 聚会 上 认识 了 。', "We met at a friend's party."],
            ['在 这 个 问题 上 ， 我 同意 你 。', 'On this question, I agree with you.'],
          ]},
      ],
      culture: { title: 'Qixi: Chinese Valentine\'s Day', body: 'On the 7th day of the 7th lunar month is <b>七夕 (Qīxī)</b>. It comes from the legend of the cowherd <b>牛郎</b> and the weaver girl <b>织女</b>, two lovers separated by the Milky Way (the stars Altair and Vega). Once a year, magpies form a bridge so they can meet. Today couples exchange flowers and chocolate on Qixi, much like Valentine\'s Day.' },
    },

    {
      n: 2, zh: '真正的朋友', en: 'A true friend',
      focus: 'Friendship · 正好 · 差不多 vs 几乎 · 尽管 · 却 · 而',
      words: HSK.W4[2],
      dialogues: [
        { scene: 'Keeping in touch', lines: [
          ['A', '毕业 以后 ， 你 跟 大学 同学 还 有 联系 吗 ？', 'Are you still in touch with your university classmates since graduating?'],
          ['B', '差不多 都 有 。 我们 平时 发 短信 ， 每 年 还 有 一 次 聚会 。', 'With almost all of them. We text normally, and we have a reunion every year.'],
        ]},
        { scene: 'New in town', lines: [
          ['A', '我 刚 来 这 个 城市 ， 还 不 太 适应 ， 周围 一 个 朋友 也 没有 ， 真 无聊 。', "I've just moved to this city and I'm not used to it yet. I don't have a single friend around me. It's so boring."],
          ['B', '周末 我 陪 你 去 逛 街 吧 ， 你 可以 交 一些 新 朋友 。', "I'll take you around the shops at the weekend. You can make some new friends."],
        ]},
        { scene: 'A favour', lines: [
          ['A', '麻烦 你 帮 我 看 一下 这 个 句子 。', 'Could you check this sentence for me?'],
          ['B', '正好 我 有 空儿 ， 我 看看{kàn kan} 。', 'I happen to be free. Let me have a look.'],
          ['A', '谢谢 你 专门 来 帮 我 ！', 'Thanks for coming specially to help me!'],
        ]},
        { scene: 'Reading: a true friend', lines: [
          ['📖', '真正 的 朋友 不 一定 天天 见面 ， 却 会 在 你 有 困难 的 时候 及时 出现 。', "True friends don't necessarily meet every day, but they show up right when you're in trouble."],
          ['📖', '尽管 大家 都 很 忙 ， 朋友 之间 的 交流 还是 让 我们 的 生活 更 丰富 。', "Although everyone is busy, contact between friends still makes our lives richer."],
          ['📖', '有 的 人 朋友 很 多 ， 而 真正 理解 他 的 却 很 少 。', 'Some people have lots of friends, while very few truly understand them.'],
        ]},
      ],
      grammar: [
        { title: '正好 = just right; it so happens',
          body: '<b>正好</b> can describe something being exactly right (穿着正好 = fits perfectly), or a lucky coincidence ("it so happens that…").',
          examples: [
            ['正好 我 有 空儿 。', 'As it happens, I\'m free.'],
            ['这 件 衣服 我 穿 正好 。', 'This fits me perfectly.'],
          ]},
        { title: '差不多 vs 几乎',
          body: 'Both mean "almost" before a verb. <b>差不多</b> can also be an adjective, "about the same": 两个人差不多高. <b>几乎</b> is only an adverb and sounds a bit stronger ("nearly").',
          examples: [
            ['我们 差不多 都 有 联系 。', "We're in touch with almost everyone."],
            ['他们 俩 差不多 高 。', "They're about the same height."],
            ['我 几乎 忘 了 。', 'I nearly forgot.'],
          ]},
        { title: '尽管 … (但是 / 还是) … = although',
          body: '<b>尽管</b> admits a fact, and the second part says something happens anyway.',
          examples: [
            ['尽管 很 累 ， 他 还是 陪 我 去 了 医院 。', 'Although he was tired, he still went to the hospital with me.'],
          ]},
        { title: '却 = but, yet (unexpectedly)',
          body: '<b>却</b> is an adverb: it goes <b>after the subject</b>, before the verb, and marks a surprising contrast.',
          examples: [
            ['我 请 了 他 ， 他 却 没 来 。', "I invited him, but he didn't come."],
            ['朋友 很 多 ， 真正 的 朋友 却 很 少 。', 'There are many friends, but few true ones.'],
          ]},
        { title: '而 = while, whereas',
          body: '<b>而</b> joins two contrasting facts in more formal speech and writing.',
          examples: [
            ['这 件 很 贵 ， 而 那 件 很 便宜 。', 'This one is expensive, whereas that one is cheap.'],
          ]},
      ],
      saying: ['在家靠父母，出门靠朋友', 'Zài jiā kào fùmǔ, chū mén kào péngyou', 'At home you rely on your parents; away from home, on your friends.', 'Friends are your family when you are far from home.'],
    },

    {
      n: 3, zh: '经理对我印象不错', en: 'The manager has a good impression of me',
      focus: 'Job interviews · 挺 · 本来 · 另外 vs 另 · 首先…其次… · 不管',
      words: HSK.W4[3],
      dialogues: [
        { scene: 'After the interview', lines: [
          ['A', '昨天 的 应聘 怎么样 ？', 'How was yesterday\'s job interview?'],
          ['B', '挺 好 的 ， 经理 对 我 印象 不错 。', 'Pretty good. The manager has a good impression of me.'],
          ['A', '你 紧张 吗 ？', 'Were you nervous?'],
          ['B', '本来 很 紧张 ， 后来 就 有 信心 了 。', 'I was nervous at first, but then I felt confident.'],
        ]},
        { scene: 'The interview', lines: [
          ['经理', '请 你 先 介绍 一下 自己 。', 'Please start by introducing yourself.'],
          ['B', '我 的 专业 是 法律 ， 以前 在 一 家 律师 公司 工作 。', 'I majored in law and used to work at a law firm.'],
          ['经理', '你 为什么 想 来 我们 公司 ？', 'Why do you want to join our company?'],
          ['B', '首先 ， 这 个 工作 符合 我 的 专业 ； 其次 ， 我 希望 能 提高 自己 的 能力 。', 'First, the job fits my major; second, I hope to develop my abilities.'],
        ]},
        { scene: 'Customer service', lines: [
          ['经理', '我们 招聘 的 人 要 负责 顾客 服务 ， 你 觉得 自己 适合 吗 ？', 'The person we\'re recruiting will be in charge of customer service. Do you think you\'re suitable?'],
          ['B', '我 很 诚实 ， 也 很 准时 。 不管 遇到 什么 问题 ， 我 都 会 认真 解决 。', "I'm honest and punctual. Whatever problem comes up, I'll deal with it carefully."],
          ['经理', '好 ， 请 把 材料 留 下 ， 我们 会 通知 你 。 另外 ， 收入 的 问题 咱们 下 次 再 谈 。', "Good. Please leave your documents and we'll let you know. Also, we'll discuss salary next time."],
        ]},
        { scene: 'Reading: interview tips', lines: [
          ['📖', '应聘 的 时候 ， 第一 印象 非常 重要 。', 'At a job interview, the first impression is very important.'],
          ['📖', '首先 要 准时 ， 其次 要 穿 得 正式 一点儿 。', "First, be on time; second, dress a little formally."],
          ['📖', '另外 ， 回答 问题 要 诚实 ， 不要 太 紧张 。 这样 ， 经理 才 能 正确 地 判断 你 的 能力 。', "Also, answer honestly and don't be too nervous. That way the manager can judge your abilities correctly."],
        ]},
      ],
      grammar: [
        { title: '挺 + adjective (+ 的) = quite, pretty',
          body: '<b>挺</b> is a friendly, spoken "quite/rather". It is often followed by 的.',
          examples: [
            ['挺 好 的 。', 'Pretty good.'],
            ['这 个 工作 挺 有 意思 的 。', 'This job is quite interesting.'],
          ]},
        { title: '本来 = originally; (of course)',
          body: '<b>本来</b> describes how things were <b>at first</b>, before a change. It can also mean "it should obviously be so": 本来就应该准时.',
          examples: [
            ['我 本来 很 紧张 ， 后来 就 不 紧张 了 。', "I was nervous at first, then I wasn't."],
            ['上班 本来 就 应该 准时 。', 'Of course you should be on time for work.'],
          ]},
        { title: '另外 vs 另',
          body: '<b>另外</b> can start a sentence ("in addition") or describe a noun (另外一个问题). <b>另</b> goes before a verb or 一 + measure word: 另找一个人 (find someone else).',
          examples: [
            ['另外 ， 收入 的 问题 咱们 下 次 再 谈 。', "Also, let's talk about salary next time."],
            ['我 还 有 另外 一 个 问题 。', 'I have another question.'],
          ]},
        { title: '首先 … ， 其次 … = first …, second …',
          body: 'Use <b>首先</b> and <b>其次</b> to list reasons or steps in order. Add 最后 for the last one.',
          examples: [
            ['首先 要 准时 ， 其次 要 穿 得 正式 一点儿 。', 'First be on time, then dress a little formally.'],
          ]},
        { title: '不管 … 都 / 也 … = no matter …',
          body: '<b>不管</b> + a question (什么/怎么/多 + adj/A不A) + <b>都</b>: the result stays the same whatever happens.',
          examples: [
            ['不管 遇到 什么 问题 ， 我 都 会 认真 解决 。', "Whatever problem comes up, I'll deal with it carefully."],
            ['不管 多 忙 ， 他 都 坚持 运动 。', 'No matter how busy he is, he keeps exercising.'],
          ]},
      ],
      culture: { title: 'The Zhongshan suit and the qipao', body: 'Two famous kinds of Chinese formal wear date from the early 20th century. The <b>中山装 (Zhōngshān zhuāng)</b>, named after Sun Yat-sen (孙中山), is a jacket with a closed collar and four pockets; it is often called the "Mao suit" in English. The <b>旗袍 (qípáo)</b> is a close-fitting dress with a high collar and side slits, developed from the clothing of the Manchu people. Both are still worn at formal events.' },
    },

    {
      n: 4, zh: '不要太着急赚钱', en: "Don't be in a hurry to make money",
      focus: 'Work & money · 以为 · 原来 vs 本来 · 并 · 按照 · 甚至',
      words: HSK.W4[4],
      dialogues: [
        { scene: 'Plans after graduation', lines: [
          ['A', '毕业 以后 你 有 什么 计划 ？', 'What are your plans after graduating?'],
          ['B', '我 想 先 找 一 份 工作 ， 积累 一些 经验 。', 'I want to find a job first and get some experience.'],
          ['A', '我 以为 你 要 自己 做 生意 呢 。', 'I thought you were going to start your own business.'],
          ['B', '我 的 知识 和 经验 都 还 不 够 ， 不 能 太 着急 赚 钱 。', "My knowledge and experience aren't enough yet. I can't be in too much of a hurry to make money."],
        ]},
        { scene: 'The bonus', lines: [
          ['A', '这 个 月 的 奖金 发 了 吗 ？', "Has this month's bonus been paid?"],
          ['B', '发 了 ， 原来 你 还 不 知道 啊 ！ 按照 公司 的 计划 ， 每 个 人 都 有 。', "Yes! So you didn't know? According to the company's plan, everyone gets one."],
          ['A', '太 好 了 ， 感谢 经理 ！', 'Great, thanks to the manager!'],
        ]},
        { scene: 'Too much work', lines: [
          ['A', '我 最近 工作 太 多 ， 甚至 周末 都 不得不 加班 。', "I have too much work lately. I even have to work at weekends."],
          ['B', '你 应该 按时 休息 ， 提前 安排 好 一切 ， 工作 才 不 会 乱 。', "You should rest regularly and plan everything in advance, then your work won't get messy."],
          ['A', '谢谢 你 提醒 我 。', 'Thanks for reminding me.'],
        ]},
        { scene: 'Reading: money and success', lines: [
          ['📖', '很 多 年轻 人 以为 赚 钱 越 多 越 成功 ， 其实 并 不 是 这样 。', "Many young people think the more money you make, the more successful you are. Actually, it isn't so."],
          ['📖', '调查 发现 ， 工资 高 的 人 并 不 一定 更 幸福 。', "Surveys find that people with high salaries aren't necessarily happier."],
          ['📖', '年轻 的 时候 ， 积累 知识 和 经验 比 赚 钱 更 重要 。 有 了 好 的 方法 ， 成功 是 早晚 的 事 。', "When you're young, gaining knowledge and experience matters more than money. With the right approach, success is only a matter of time."],
        ]},
      ],
      grammar: [
        { title: '以为 = thought (wrongly)',
          body: '<b>以为</b> means "I thought…", usually about something that turned out to be <b>wrong</b>. (认为 is a neutral opinion.)',
          examples: [
            ['我 以为 你 要 自己 做 生意 呢 。', 'I thought you were going to start a business.'],
            ['我 以为 今天 是 星期 六 。', 'I thought today was Saturday.'],
          ]},
        { title: '原来 vs 本来',
          body: 'Both can mean "originally". Only <b>原来</b> means "so it turns out!" (discovering something). Only <b>本来</b> means "of course, naturally". 原来 can also describe a noun: 原来的计划 (the original plan).',
          examples: [
            ['原来 你 还 不 知道 啊 ！', "So you didn't know!"],
            ['他 原来 是 老师 ， 现在 是 律师 。', 'He used to be a teacher; now he\'s a lawyer.'],
          ]},
        { title: '并 + 不 / 没 = actually not',
          body: '<b>并</b> before a negative stresses that something is <b>not</b> as people might think.',
          examples: [
            ['其实 并 不 是 这样 。', "Actually, it isn't like that at all."],
            ['我 并 没有 生气 。', "I'm not angry at all."],
          ]},
        { title: '按照 = according to',
          body: '<b>按照 + rule/plan/instructions</b> says what you are following.',
          examples: [
            ['按照 公司 的 计划 ， 每 个 人 都 有 。', "According to the company's plan, everyone gets one."],
            ['请 按照 老师 说 的 做 。', 'Please do as the teacher says.'],
          ]},
        { title: '甚至 = even',
          body: '<b>甚至</b> introduces the most extreme example.',
          examples: [
            ['他 甚至 周末 都 要 加班 。', 'He even works at weekends.'],
            ['这 个 问题 甚至 老师 也 不 知道 。', "Even the teacher doesn't know the answer to this question."],
          ]},
      ],
      saying: ['授人以鱼不如授人以渔', 'Shòu rén yǐ yú bù rú shòu rén yǐ yú', 'Giving someone a fish is not as good as teaching them to fish.', 'Teaching skills is better than giving help.'],
    },

    {
      n: 5, zh: '只买对的，不买贵的', zhTok: '只{zhǐ} 买 对 的 ， 不 买 贵 的', en: "Buy what's right, not what's expensive",
      focus: 'Shopping · 肯定 · 再说 · 实际 · 对…来说 · 尤其 vs 特别',
      words: HSK.W4[5],
      dialogues: [
        { scene: 'A discounted air-conditioner', lines: [
          ['A', '这 台 空调 在 打折 ， 我们 买 吧 。', "This air-conditioner is on sale. Let's buy it."],
          ['B', '光 看 价格 不 行 ， 还 要 考虑 质量 。', "Price alone isn't enough, we need to consider quality too."],
          ['A', '它 的 广告 到处 都 是 ， 质量 肯定 没 问题 。', 'Its ads are everywhere; the quality must be fine.'],
          ['B', '广告 说 的 不 一定 是 实际 情况 ， 再说 制冷 效果 也 不 知道 怎么样 。', "What the ads say isn't necessarily the reality, and besides, we don't know how well it cools."],
        ]},
        { scene: 'Buying furniture', lines: [
          ['A', '周末 我 想 去 买 家具 ， 你 能 陪 我 去 吗 ？', 'I want to buy furniture this weekend. Can you come with me?'],
          ['B', '好 啊 ， 我 顺便 买 个 沙发 。', "Sure, I'll pick up a sofa while I'm there."],
          ['A', '现在 流行 的 样子 不 一定 适合 我 家 。', "The styles in fashion now don't necessarily suit my home."],
          ['B', '对 我 来说 ， 舒服 最 重要 。', 'For me, comfort matters most.'],
        ]},
        { scene: 'Shopping online', lines: [
          ['A', '你 在 网上 买 东西 吗 ？', 'Do you buy things online?'],
          ['B', '买 ， 尤其 是 水果 ， 比如 葡萄 ， 又 新鲜 又 便宜 。', 'Yes, especially fruit like grapes. It\'s fresh and cheap.'],
          ['A', '用 现金 还是 信用卡 ？', 'Cash or credit card?'],
          ['B', '都 可以 ， 他们 还 可以 把 东西 寄 到 家 里 。', 'Either. They can also send things to your home.'],
        ]},
        { scene: 'Reading: how to shop', lines: [
          ['📖', '购物 的 时候 ， 很 多 人 会 受到 广告 的 影响 。', 'When shopping, many people are influenced by advertising.'],
          ['📖', '其实 ， 贵 的 东西 不 一定 好 ， 便宜 的 也 不 一定 不 好 。', "In fact, expensive things aren't necessarily good, and cheap ones aren't necessarily bad."],
          ['📖', '对 我 来说 ， 买 东西 的 标准 只有 一 个 ： 适合 自己 。 不 买 没 用 的 东西 ， 就 是 不 浪费 。', "For me there's only one rule for buying: it has to suit me. Not buying useless things means not wasting."],
        ]},
      ],
      grammar: [
        { title: '肯定 = definitely, surely',
          body: '<b>肯定</b> before a verb shows you are <b>sure</b>. As an adjective it means "certain; positive".',
          examples: [
            ['质量 肯定 没 问题 。', 'The quality must be fine.'],
            ['他 肯定 会 来 。', "He'll definitely come."],
          ]},
        { title: '再说 = besides, what\'s more',
          body: '<b>再说</b> adds <b>one more reason</b>, usually at the start of the second clause.',
          examples: [
            ['我 今天 很 累 ， 再说 外面 在 下雨 ， 不 去 了 。', "I'm tired today, and besides, it's raining. I won't go."],
          ]},
        { title: '实际 = reality, actual',
          body: '<b>实际</b> (noun/adj) = the real situation. <b>实际上</b> = "in fact".',
          examples: [
            ['广告 说 的 不 一定 是 实际 情况 。', "What the ads say isn't necessarily the reality."],
            ['实际 上 ， 他 并 不 喜欢 。', "In fact, he doesn't like it at all."],
          ]},
        { title: '对 … 来说 = for …, as far as … is concerned',
          body: 'Gives the point of view from which something is judged.',
          examples: [
            ['对 我 来说 ， 舒服 最 重要 。', 'For me, comfort matters most.'],
            ['对 学生 来说 ， 这 本 书 有点儿 难 。', 'For students, this book is a bit hard.'],
          ]},
        { title: '尤其 vs 特别',
          body: '<b>尤其</b> picks out one item from a group: "especially". It usually comes after the general statement: …，尤其是…. <b>特别</b> can also mean "very" (特别好) or "special" (很特别), but 尤其 cannot.',
          examples: [
            ['我 喜欢 水果 ， 尤其 是 葡萄 。', 'I like fruit, especially grapes.'],
            ['这 件 衣服 很 特别 。', 'This outfit is very unusual.'],
          ]},
      ],
      culture: { title: 'How people shop in China', body: 'Online shopping is huge in China. Apps like <b>淘宝 (Táobǎo)</b> and <b>京东 (Jīngdōng)</b> deliver quickly, and on <b>双十一 (11 November, "Singles\' Day")</b> people spend billions in a day. Almost everyone pays by phone with <b>微信支付</b> or <b>支付宝</b>, and even street stalls have QR codes. In markets you can still <b>讨价还价 (bargain)</b>, but not in supermarkets or chain stores.' },
    },

    {
      n: 6, zh: '一分钱一分货', en: 'You get what you pay for',
      focus: 'Prices & quality · 竟然 · 倍 · 值得 vs 值 · 其中 · 在…下',
      words: HSK.W4[6],
      dialogues: [
        { scene: 'Expensive socks', lines: [
          ['A', '这 双 袜子 竟然 要 一百 块 ！', 'These socks cost a hundred yuan!'],
          ['售货员', '俗话 说 ， “ 一分钱一分货 ” ， 质量 好 的 东西 值得 买 。', 'As the saying goes, "you get what you pay for". Good quality is worth buying.'],
        ]},
        { scene: 'A supermarket event', lines: [
          ['售货员', '我们 超市 在 举办 活动 ， 买 满 一百 块 就 能 免费 获得 一 张{zhāng} 会员卡 。', "Our supermarket is running a promotion: spend 100 yuan and you get a free membership card."],
          ['A', '有 什么 好处 ？', "What's the benefit?"],
          ['售货员', '用 会员卡 买 东西 ， 所有 的 价格 都 降低 百分之 十 。', 'With the card, all prices are 10% lower.'],
        ]},
        { scene: 'Fresh juice', lines: [
          ['A', '这 杯 西红柿 果汁 你 尝 了 吗 ？', 'Have you tasted this tomato juice?'],
          ['B', '尝 了 ， 听说 对 皮肤 很 好 。', "I have. I hear it's good for your skin."],
          ['A', '可是 价格 比 去年 高 了 一 倍 。', "But the price has doubled since last year."],
        ]},
        { scene: 'Reading: a bookshop', lines: [
          ['📖', '这 家 书店 有 两千 多 本 小说 ， 其中 一半 是 外国 的 。', 'This bookshop has over 2,000 novels, half of them foreign.'],
          ['📖', '在 老板 的 支持 下 ， 售货员 每 个 月 都 举办 读 书 活动 。', "With the owner's support, the staff hold a reading event every month."],
          ['📖', '书 的 价格 不 低 ， 可是 很 多 人 觉得 ， 各 方面 都 很 值得 。', "The books aren't cheap, but many people feel it's worth it in every way."],
        ]},
      ],
      grammar: [
        { title: '竟然 = surprisingly, to my surprise',
          body: '<b>竟然</b> shows that something is <b>unexpected</b> for the speaker.',
          examples: [
            ['这 双 袜子 竟然 要 一百 块 ！', 'These socks actually cost a hundred yuan!'],
            ['他 竟然 忘 了 我 的 生日 。', 'He actually forgot my birthday.'],
          ]},
        { title: '倍 = times, -fold',
          body: '<b>A 是 B 的 两倍</b> = A is twice B. <b>高了一倍</b> = went up by 100% (doubled).',
          examples: [
            ['价格 比 去年 高 了 一 倍 。', 'The price has doubled since last year.'],
            ['我们 班 的 学生 是 他们 班 的 两 倍 。', 'Our class has twice as many students as theirs.'],
          ]},
        { title: '值得 vs 值',
          body: '<b>值得 + verb/clause</b> = "worth doing". <b>值 + amount</b> = "worth (a price)".',
          examples: [
            ['这 本 小说 值得 看 。', 'This novel is worth reading.'],
            ['这 件 衣服 值 两百 块 。', 'This piece of clothing is worth 200 yuan.'],
          ]},
        { title: '其中 = among them, of which',
          body: '<b>其中</b> refers back to a group just mentioned.',
          examples: [
            ['其中 一半 是 外国 的 。', 'Half of them are foreign.'],
            ['我 有 三 个 哥哥 ， 其中 一 个 是 医生 。', 'I have three older brothers; one of them is a doctor.'],
          ]},
        { title: '在 … 下 = with (support/help), under (conditions)',
          body: '<b>在 + someone\'s help/support + 下</b> gives the condition that made something possible.',
          examples: [
            ['在 老板 的 支持 下 ， 他们 举办 了 活动 。', "With the owner's support, they held the event."],
            ['在 老师 的 帮助 下 ， 他 的 汉语 提高 了 很 多 。', "With the teacher's help, his Chinese improved a lot."],
          ]},
      ],
      culture: { title: 'Green food', body: 'In China, food with the <b>绿色食品 (lǜsè shípǐn, "green food")</b> label is officially certified as grown with limited chemicals and in a clean environment. There are two grades, A and the stricter AA (close to organic). The idea: <b>一分钱一分货</b>, spend a little more for food that is safer and better quality.' },
    },

    {
      n: 7, zh: '最好的医生是自己', en: 'The best doctor is yourself',
      focus: 'Health · 估计 vs 可能 · 来不及 · doubling separable verbs (散散步) · 要是 · 既…又…',
      words: HSK.W4[7],
      dialogues: [
        { scene: "At the doctor's", lines: [
          ['A', '大夫 ， 我 最近 经常 咳嗽 ， 肚子 也 不 舒服 。', "Doctor, I've been coughing a lot lately and my stomach hurts."],
          ['大夫', '你 抽烟 吗 ？', 'Do you smoke?'],
          ['A', '抽 ， 一 天 超过 一 包 。', 'Yes, more than a pack a day.'],
          ['大夫', '这 个 问题 很 严重 ， 要是 再 不 少 抽 ， 后悔 就 来不及 了 。', "That's serious. If you don't cut down, it'll be too late to regret it."],
        ]},
        { scene: 'Losing weight', lines: [
          ['A', '你 怎么 越来越 瘦 了 ？', 'How come you\'re getting thinner?'],
          ['B', '我 在 减肥 。 每 天 晚饭 后 散散步 ， 周末 游游泳 。', "I'm losing weight. I take a walk after dinner every day and swim at weekends."],
          ['A', '估计 你 很 快 就 会 更 帅 了 ！', "I reckon you'll be even more handsome soon!"],
        ]},
        { scene: 'Fresh air', lines: [
          ['A', '你 在 做 什么 ？', 'What are you doing?'],
          ['B', '我 在 擦 窗户 ， 让 新鲜 空气 进来 。', "I'm cleaning the windows to let fresh air in."],
          ['A', '太 辛苦 了 ， 休息 休息 吧 。', "That's hard work. Take a rest."],
        ]},
        { scene: 'Reading: body and mind', lines: [
          ['📖', '一 位 教授 研究 发现 ， 人 的 身体 和 感情 有 很 大 的 关系 。', 'A professor\'s research found that our bodies and emotions are closely connected.'],
          ['📖', '烦恼 太 多 的 人 更 容易 生病 。', 'People with too many worries get ill more easily.'],
          ['📖', '所以 最 好 的 医生 是 自己 ： 既 要 多 运动 ， 也 要 保持 好 心情 。', 'So the best doctor is yourself: exercise more, and keep a good mood too.'],
        ]},
      ],
      grammar: [
        { title: '估计 vs 可能',
          body: '<b>估计</b> = "I reckon", a guess based on some evidence; it can have a subject (我估计…). <b>可能</b> = "maybe", general possibility, and it can also be an adjective (很可能, 不可能).',
          examples: [
            ['估计 你 很 快 就 会 更 帅 了 。', "I reckon you'll soon be even more handsome."],
            ['我 估计 他 不 会 来 了 。', "I reckon he won't come now."],
          ]},
        { title: '来不及 / 来得及 = too late / still time',
          body: '<b>来不及 + verb</b> = there isn\'t enough time to do it. <b>来得及</b> = there is still time.',
          examples: [
            ['后悔 就 来不及 了 。', "It'll be too late for regrets."],
            ['别 着急 ， 还 来得及 。', "Don't worry, there's still time."],
          ]},
        { title: 'Doubling separable verbs: 散散步, 游游泳',
          body: 'Some verbs are really <b>verb + object</b> (散步, 游泳, 聊天, 帮忙). To double them, repeat only the <b>verb part</b>: 散散步, 聊聊天. That makes it casual: "take a little walk".',
          examples: [
            ['我们 去 散散步 吧 。', "Let's go for a little walk."],
            ['周末 我 喜欢 游游泳 。', 'At weekends I like to go for a swim.'],
          ]},
        { title: '要是 … (就) … = if …',
          body: '<b>要是</b> is a spoken <b>如果</b>.',
          examples: [
            ['要是 明天 下雨 ， 我们 就 不 去 了 。', "If it rains tomorrow, we won't go."],
          ]},
        { title: '既 … 又 / 也 … = both … and …',
          body: '<b>既</b> goes before the first verb/adjective; <b>又</b> or <b>也</b> before the second.',
          examples: [
            ['既 要 多 运动 ， 也 要 保持 好 心情 。', 'You need to exercise more and keep a good mood.'],
            ['她 既 聪明 又 漂亮 。', "She's both clever and pretty."],
          ]},
      ],
      culture: { title: 'Taiji and tai chi', body: '<b>太极 (tàijí)</b> is an old Chinese idea: the balance of <b>阴 (yīn)</b> and <b>阳 (yáng)</b>, opposites that complete each other, shown in the black-and-white circle symbol. <b>太极拳 (tàijíquán)</b> is a martial art built on that idea: slow, soft, flowing movements with calm breathing. Millions of people practise it in parks every morning for balance, flexibility and peace of mind.' },
    },

    {
      n: 8, zh: '生活中不缺少美', en: 'Life is full of beauty',
      focus: 'Attitude & mood · 使 · 只要…就 · 可不是 · 因此 · 往往 vs 经常',
      words: HSK.W4[8],
      dialogues: [
        { scene: 'Stuck in traffic', lines: [
          ['A', '今天 又 堵车 了 ， 我 心情 很 不 好 。', "Stuck in traffic again today. I'm in a bad mood."],
          ['B', '别 生气 ， 你 看 窗户 外面 的 景色 多 美 ！', "Don't be angry. Look how lovely the view outside the window is!"],
          ['A', '你 的 态度 真 积极 。', 'You have such a positive attitude.'],
          ['B', '可不是 嘛 ， 生活 中 到处 都 有 美 。', "Of course! There's beauty everywhere in life."],
        ]},
        { scene: 'In a taxi', lines: [
          ['A', '师傅 ， 去 大使馆 还 有 多 远 ？', 'Driver, how far is it to the embassy?'],
          ['司机', '距离 不 远 了 ， 只要 不 堵车 ， 十 分钟 就 到 。', "Not far now. As long as there's no traffic jam, ten minutes."],
        ]},
        { scene: 'Stress', lines: [
          ['A', '最近 工作 压力 很 大 ， 我 应该 怎么 放松 ？', "I'm under a lot of pressure at work lately. How should I relax?"],
          ['B', '吃 点儿 巧克力 能 使 人 心情 愉快 ， 这 是 科学 证明 了 的 。', "Eating a bit of chocolate puts you in a good mood. It's scientifically proven."],
          ['A', '真 的 吗 ？ 那 我 马上 去 买 。', "Really? Then I'll go and buy some right now."],
        ]},
        { scene: 'Reading: finding beauty', lines: [
          ['📖', '回忆 小时候 ， 我 总是 很 愉快 。 那时 我们 缺少 钱 ， 却 不 缺少 阳光 和 笑声 。', "When I remember my childhood, I always feel happy. Back then we lacked money, but never sunshine and laughter."],
          ['📖', '长大 以后 ， 人们 往往 忙 得 忘 了 生活 中 的 美 。', 'As adults, people are often so busy they forget the beauty in life.'],
          ['📖', '其实 ， 只要 有 耐心 去 发现 ， 美 就 在 你 身边 。 因此 ， 别 让 压力 使 你 伤心 。', "In fact, as long as you're patient enough to look, beauty is right beside you. So don't let pressure make you sad."],
        ]},
      ],
      grammar: [
        { title: '使 = to make, to cause',
          body: '<b>A 使 B + verb/adj</b>: A causes B to feel or become something. It\'s more formal than 让.',
          examples: [
            ['巧克力 能 使 人 心情 愉快 。', 'Chocolate can put people in a good mood.'],
            ['这 件 事 使 他 很 伤心 。', 'This made him very sad.'],
          ]},
        { title: '只要 … 就 … = as long as …',
          body: 'The condition after <b>只要</b> is <b>enough</b> for the result after <b>就</b>.',
          examples: [
            ['只要 不 堵车 ， 十 分钟 就 到 。', "As long as there's no traffic, we'll be there in ten minutes."],
          ]},
        { title: '可不是 (嘛) = exactly! you said it!',
          body: 'A strong way to <b>agree</b> with what the other person just said.',
          examples: [
            ['可不是 嘛 ， 生活 中 到处 都 有 美 。', "Exactly, there's beauty everywhere in life."],
          ]},
        { title: '因此 = therefore',
          body: '<b>因此</b> introduces a result. It is more formal than 所以 and can start a sentence.',
          examples: [
            ['他 每 天 坚持 运动 ， 因此 身体 很 好 。', "He exercises every day, so he's very healthy."],
          ]},
        { title: '往往 vs 经常',
          body: '<b>往往</b> describes a <b>general pattern</b> seen in the past ("tends to"); it needs a condition or situation and isn\'t used for plans. <b>经常</b> simply means "often" and can be used for the future: 以后我会经常来.',
          examples: [
            ['人们 往往 忙 得 忘 了 生活 中 的 美 。', 'People tend to be so busy they forget the beauty in life.'],
            ['周末 他 往往 去 公园 散步 。', 'At weekends he usually walks in the park.'],
          ]},
      ],
      culture: { title: 'Red and white in Chinese eyes', body: '<b>Red 红</b> is the colour of luck, joy and celebration: red envelopes, red lanterns, red wedding clothes, red couplets at New Year. Something very popular is even called <b>红</b> or <b>火</b>. <b>White 白</b> traditionally goes with mourning and funerals, so avoid white wrapping or white flowers as gifts. In modern life, though, a white wedding dress is also common.' },
    },

    {
      n: 9, zh: '阳光总在风雨后', en: 'After the storm comes the sunshine',
      focus: 'Success & failure · 难道 · 通过 vs 经过 · 可是 · 结果 · 上 (reaching a goal)',
      words: HSK.W4[9],
      dialogues: [
        { scene: 'The tennis match', lines: [
          ['A', '昨天 的 网球 比赛 你 赢 了 吗 ？', "Did you win yesterday's tennis match?"],
          ['B', '没 赢 ， 可是 我 学 到 了 很 多 。', "No, but I learned a lot."],
          ['A', '你 打 得 满 头 大 汗 ， 难道 不 累 吗 ？', "You were dripping with sweat. Aren't you tired?"],
          ['B', '累 ， 可是 我 不 想 放弃 。', "I am, but I don't want to give up."],
        ]},
        { scene: 'A dream job', lines: [
          ['A', '我 的 理想 是 成为 一 个 作家 。', 'My dream is to become a writer.'],
          ['B', '那 你 得{děi} 坚持 每 天 写 ， 至少 写 一 篇 文章 。', 'Then you have to keep writing every day, at least one piece.'],
          ['A', '好 主意 ！', 'Good idea!'],
        ]},
        { scene: 'Good news', lines: [
          ['A', '我 考 上 了 国际 学校 ！', 'I got into the international school!'],
          ['B', '太 棒 了 ！ 你 是 怎么 准备 的 ？', 'Brilliant! How did you prepare?'],
          ['A', '我 通过 网上 的 课 学习 ， 每 个 星期 总结 一 次 。', 'I studied through online classes and did a review every week.'],
        ]},
        { scene: 'Reading: Edison', lines: [
          ['📖', '爱迪生 在 研究 电灯 的 过程 中 ， 失败 了 一千 多 次 。', 'While developing the light bulb, Edison failed over a thousand times.'],
          ['📖', '当时 许多 人 都 劝 他 放弃 ， 他 却 说 ： “ 我 没有 失败 ， 只是 发现 了 一千 多 种 不 正确 的 方法 。 ”', 'Many people at the time urged him to give up, but he said: "I haven\'t failed; I\'ve just found over a thousand wrong ways."'],
          ['📖', '结果 ， 他 成功 了 。 阳光 总 在 风雨 后 ， 只要 勇敢 地 面对 ， 就 会 有 好 的 结果 。', "In the end, he succeeded. Sunshine always comes after the storm: face things bravely and good results will follow."],
        ]},
      ],
      grammar: [
        { title: '难道 … (吗)? = surely not … ? could it be …?',
          body: '<b>难道</b> makes a <b>rhetorical question</b> that expresses surprise or disbelief.',
          examples: [
            ['难道 你 不 累 吗 ？', "Surely you're tired?"],
            ['难道 你 忘 了 吗 ？', 'Have you really forgotten?'],
          ]},
        { title: '通过 vs 经过',
          body: '<b>通过</b> = "by means of, through (a method)" or "to pass (an exam)". <b>经过</b> = "to pass by (a place)" or "after going through (a process/time)".',
          examples: [
            ['我 通过 网上 的 课 学习 。', 'I studied through online classes.'],
            ['经过 一 年 的 努力 ， 他 成功 了 。', "After a year's effort, he succeeded."],
          ]},
        { title: '可是 = but',
          body: '<b>可是</b> is a spoken "but", about as strong as 但是.',
          examples: [
            ['没 赢 ， 可是 我 学 到 了 很 多 。', "I didn't win, but I learned a lot."],
          ]},
        { title: '结果 = as a result, in the end',
          body: '<b>结果</b> as a noun = "result"; at the start of a clause = "in the end".',
          examples: [
            ['结果 ， 他 成功 了 。', 'In the end, he succeeded.'],
            ['比赛 的 结果 怎么样 ？', 'What was the result of the match?'],
          ]},
        { title: 'Verb + 上 = reach a goal / start',
          body: '<b>上</b> after a verb can mean reaching a hard goal (考上 = pass the entrance exam for), starting a feeling (爱上 = fall in love with), or closing (关上).',
          examples: [
            ['我 考 上 了 国际 学校 。', 'I got into the international school.'],
            ['他 爱 上 了 中国 菜 。', "He's fallen in love with Chinese food."],
          ]},
      ],
      culture: { title: 'The secret of success', body: 'Chinese has many sayings about success through effort: <b>失败是成功之母</b> ("failure is the mother of success"), <b>有志者事竟成</b> ("where there\'s a will, there\'s a way"), and <b>一分耕耘，一分收获</b> ("you reap what you sow"). The shared idea: talent helps, but persistence (<b>坚持</b>) is what counts.' },
    },

    {
      n: 10, zh: '幸福的标准', en: 'What makes us happy',
      focus: 'Happiness · 不过 vs 但是 · 确实 · 在…看来 · 由于 · 比如',
      words: HSK.W4[10],
      dialogues: [
        { scene: 'What is happiness?', lines: [
          ['A', '你 觉得 幸福 的 标准 是 什么 ？', 'What do you think the standard for happiness is?'],
          ['B', '这 个 问题 没有 正确 答案 。 在 我 看来 ， 有 空儿 陪 母亲 聊天儿 ， 就 是 幸福 。', "There's no right answer. In my view, having time to chat with my mother is happiness."],
        ]},
        { scene: 'Future plans', lines: [
          ['A', '你 将来 想 做 什么 职业 ？', 'What job do you want to do in the future?'],
          ['B', '我 想 当 翻译 。 不过 ， 我 得{děi} 先 读 完 硕士 。', "I want to be a translator. But I have to finish my master's first."],
          ['A', '你 这么 优秀 ， 一定 没 问题 。', "You're so good, it won't be a problem."],
        ]},
        { scene: 'A lazy Sunday', lines: [
          ['A', '礼拜天 你 做 什么 了 ？', 'What did you do on Sunday?'],
          ['B', '我 太 困 了 ， 在 沙发 上 躺 了 一 天 ， 还 吃 了 很 多 糖 。', 'I was so sleepy I lay on the sofa all day, and ate lots of sweets.'],
          ['A', '听 起来 确实 很 幸福 ！', 'Sounds very happy indeed!'],
        ]},
        { scene: 'Reading: money and happiness', lines: [
          ['📖', '有 人 认为 ， 钱 越 多 越 幸福 。 不过 ， 调查 发现 ， 富 的 人 不 一定 更 幸福 ， 穷 的 人 也 不 一定 不 幸福 。', 'Some think more money means more happiness. But surveys find the rich aren\'t necessarily happier, and the poor aren\'t necessarily unhappy.'],
          ['📖', '由于 每 个 人 的 条件 不 一样 ， 幸福 的 答案 也 不 一样 。', "Because everyone's situation is different, the answer to happiness is different too."],
          ['📖', '比如 ， 有 的 人 吃 到 一 块 糖 就 很 幸福 。 关键 是 要 知足 。', "For example, some people feel happy just eating a sweet. The key is to be content."],
        ]},
      ],
      grammar: [
        { title: '不过 vs 但是',
          body: 'Both mean "but". <b>不过</b> is softer and more conversational: it adds a small condition rather than a strong contrast.',
          examples: [
            ['我 想 当 翻译 ， 不过 得{děi} 先 读 完 硕士 。', "I want to be a translator, but I have to finish my master's first."],
          ]},
        { title: '确实 = indeed, really',
          body: '<b>确实</b> confirms that something is true.',
          examples: [
            ['你 说 得 确实 对 。', "You're absolutely right."],
            ['这 个 问题 确实 很 复杂 。', 'This problem really is complicated.'],
          ]},
        { title: '在 … 看来 = in …\'s view',
          body: 'Introduces whose <b>opinion</b> it is.',
          examples: [
            ['在 我 看来 ， 有 空儿 陪 母亲 就 是 幸福 。', 'In my view, having time for my mother is happiness.'],
            ['在 很 多 人 看来 ， 钱 最 重要 。', 'In many people\'s view, money matters most.'],
          ]},
        { title: '由于 = because of, due to',
          body: '<b>由于</b> gives a reason, more formally than 因为. It often pairs with 所以 or 因此.',
          examples: [
            ['由于 天气 不 好 ， 比赛 推迟 了 。', 'Due to the bad weather, the match was postponed.'],
          ]},
        { title: '比如 = for example',
          body: '<b>比如 (说)</b> introduces examples, like 例如.',
          examples: [
            ['我 喜欢 吃 水果 ， 比如 苹果 、 葡萄 。', 'I like fruit, for example apples and grapes.'],
          ]},
      ],
      saying: ['知足常乐', 'Zhī zú cháng lè', 'Knowing what is enough, you are always happy.', 'Contentment is happiness.'],
    },

    {
      n: 11, zh: '读书好，读好书，好读书', zhTok: '读书 好 ， 读 好 书 ， 好{hào} 读书', en: 'Reading is good: read good books, and love reading',
      focus: 'Reading · 连…也/都 · 否则 · 无论 vs 不管 · 然而 · 同时',
      words: HSK.W4[11],
      dialogues: [
        { scene: 'A home library', lines: [
          ['A', '你 客厅 里 怎么 有 这么 多 书 和 杂志 ？', 'Why are there so many books and magazines in your living room?'],
          ['B', '我 从 小 就 养成 了 阅读 的 习惯 。', "I got into the habit of reading as a kid."],
          ['A', '真 厉害 ！ 你 连 这么 厚 的 书 都 看 完 了 ？', "Impressive! You even finished such a thick book?"],
          ['B', '这 本 书 内容 很 精彩 ， 一 个 星期 就 看 完 了 。', 'The content is brilliant. I finished it in a week.'],
        ]},
        { scene: 'Fill in the blanks', lines: [
          ['A', '这 篇 文章 的 填空 题 太 复杂 了 。', 'The fill-in-the-blank questions for this article are too complicated.'],
          ['B', '你 先 读 一 遍 ， 猜 一下 词语 的 意思 ， 否则 很 难 填 准确 。', "Read it through once first and guess what the words mean, otherwise it's hard to fill them in correctly."],
        ]},
        { scene: 'Fluent Chinese', lines: [
          ['A', '你 的 汉语 说 得 真 流利 ！', 'Your Chinese is so fluent!'],
          ['B', '哪里 哪里 ， 我 的 语法 还 不 太 准确 。', "Not at all, my grammar still isn't very accurate."],
        ]},
        { scene: 'Reading: why we should read', lines: [
          ['📖', '无论 工作 多 忙 ， 都 应该 读 书 。', 'No matter how busy work is, you should read.'],
          ['📖', '读 书 能 增加 知识 ， 同时 也 能 让 人 心情 愉快 。', 'Reading increases knowledge, and at the same time puts you in a good mood.'],
          ['📖', '然而 ， 现在 很 多 人 只{zhǐ} 看 手机 ， 连 一 本 书 都 不 读 。', "However, many people now only look at their phones and don't read even a single book."],
        ]},
      ],
      grammar: [
        { title: '连 … 也 / 都 … = even …',
          body: '<b>连 + the extreme case + 也/都 + verb</b>: stresses that even that is true.',
          examples: [
            ['你 连 这么 厚 的 书 都 看 完 了 ？', 'You even finished such a thick book?'],
            ['连 孩子 都 知道 。', 'Even a child knows.'],
          ]},
        { title: '否则 = otherwise',
          body: '<b>否则</b> introduces what will happen if the first part isn\'t done.',
          examples: [
            ['快 走 吧 ， 否则 来不及 了 。', "Let's hurry, otherwise we'll be late."],
          ]},
        { title: '无论 vs 不管 (no matter)',
          body: 'Same meaning and pattern (+ question word + 都/也). <b>无论</b> is more formal and written; <b>不管</b> is more spoken.',
          examples: [
            ['无论 工作 多 忙 ， 都 应该 读 书 。', 'No matter how busy you are, you should read.'],
          ]},
        { title: '然而 = however',
          body: '<b>然而</b> is a formal "but/however", often at the start of a sentence in writing.',
          examples: [
            ['然而 ， 现在 很 多 人 只{zhǐ} 看 手机 。', 'However, many people now only look at their phones.'],
          ]},
        { title: '同时 = at the same time; meanwhile',
          body: '<b>同时</b> adds a second effect or action that happens alongside the first.',
          examples: [
            ['读 书 能 增加 知识 ， 同时 也 能 让 人 愉快 。', 'Reading increases knowledge and at the same time makes you happy.'],
          ]},
      ],
      culture: { title: 'Journey to the West', body: '<b>《西游记》(Xīyóujì)</b> is one of the four great classic Chinese novels, written in the 16th century. It tells how the monk Tang Sanzang travels to India to fetch Buddhist scriptures, protected by the <b>Monkey King 孙悟空</b>, Pigsy <b>猪八戒</b> and Sandy <b>沙僧</b>. Sun Wukong, who can make 72 transformations, is loved by children all over China.' },
    },

    {
      n: 12, zh: '用心发现世界', en: 'Discover the world with your heart',
      focus: 'Learning & teaching · 并且 · 再…也… · 对于 vs 关于 · 家家/人人 · 相反',
      words: HSK.W4[12],
      dialogues: [
        { scene: 'Asking the teacher', lines: [
          ['A', '老师 ， 这 个 词 的 用法 我 还是 不 懂 。', "Teacher, I still don't understand how to use this word."],
          ['老师', '别 着急 ， 我 再 给 你 详细 地 解释 一 遍 。', "Don't worry, I'll explain it again in detail."],
        ]},
        { scene: 'Raising children', lines: [
          ['A', '对于 孩子 的 教育 ， 你 有 什么 意见 ？', 'What\'s your opinion on bringing up children?'],
          ['B', '不 能 太 死 ， 要 多 跟 孩子 商量 。 相反 ， 如果 什么 都 规定 好 ， 孩子 会 很 不 快乐 。', "You can't be too rigid; talk things over with them. If you set rules for everything, children will be unhappy."],
        ]},
        { scene: 'A misunderstanding', lines: [
          ['A', '你 怎么 不 高兴 ？', "Why are you unhappy?"],
          ['B', '我 跟 同事 之间 有 一点儿 误会 。', "There's a little misunderstanding between me and a colleague."],
          ['A', '你 应该 直接 跟 他 谈谈 ， 也许 就 没 事 了 。', "You should talk to him directly. Maybe then it'll be fine."],
        ]},
        { scene: 'Reading: look closely', lines: [
          ['📖', '一 片 叶子 、 一 节 课 ， 都 可以 让 我们 学 到 东西 。', 'A single leaf or a single class can teach us something.'],
          ['📖', '仔细 观察 周围 ， 你 会 发现 ， 家家 都 有 自己 的 故事 。', "Look carefully around you and you'll find every family has its own story."],
          ['📖', '只要 方法 对 ， 学习 就 能 事半功倍 。 保护 环境 、 节约 用 水 ， 也 是 我们 每 个 人 的 任务 。', "With the right method, learning takes half the effort. Protecting the environment and saving water is also everyone's task."],
        ]},
      ],
      grammar: [
        { title: '并且 = and, moreover',
          body: '<b>并且</b> links two verbs or clauses, adding a further point. It is more formal than 而且.',
          examples: [
            ['他 学习 很 努力 ， 并且 成绩 很 好 。', 'He studies hard, and his grades are good.'],
          ]},
        { title: '再 + adjective … 也 … = however …, still …',
          body: '<b>再 + adj</b> means "no matter how …", and <b>也</b> says the result doesn\'t change.',
          examples: [
            ['再 忙 也 要 吃饭 。', 'However busy you are, you still have to eat.'],
            ['天气 再 冷 ， 他 也 去 跑步 。', 'However cold it is, he still goes running.'],
          ]},
        { title: '对于 vs 关于',
          body: '<b>对于</b> = "regarding, towards": it points at the target of an attitude or action. <b>关于</b> = "about, on the topic of", e.g. in titles: 关于中国的书.',
          examples: [
            ['对于 孩子 的 教育 ， 你 有 什么 意见 ？', 'What\'s your view on children\'s education?'],
            ['这 是 一 本 关于 历史 的 书 。', "This is a book about history."],
          ]},
        { title: 'Doubled nouns / measure words = every',
          body: 'Some one-syllable nouns and measure words double to mean "every": <b>家家</b> (every family), <b>人人</b> (everyone), <b>天天</b>, <b>个个</b>. Usually followed by 都.',
          examples: [
            ['家家 都 有 自己 的 故事 。', 'Every family has its own story.'],
            ['人人 都 喜欢 他 。', 'Everybody likes him.'],
          ]},
        { title: '相反 = on the contrary',
          body: '<b>相反</b> introduces the opposite situation or result.',
          examples: [
            ['他 没 生气 ， 相反 ， 他 很 高兴 。', "He wasn't angry; on the contrary, he was delighted."],
          ]},
      ],
      culture: { title: 'Confucius: teach each student differently', body: '<b>孔子 (Kǒngzǐ, Confucius)</b> is China\'s most famous teacher. He believed in <b>因材施教 (yīn cái shī jiào)</b>, "teaching according to each student\'s ability". The story goes that two students asked him the same question, and he gave them opposite answers: he told the bold one to be careful and the timid one to act at once.' },
    },

    {
      n: 13, zh: '喝着茶看京剧', en: 'Drinking tea while watching Beijing opera',
      focus: 'Arts & entertainment · 大概 vs 也许 · 偶尔 · 由 · 进行 · 随着',
      words: HSK.W4[13],
      dialogues: [
        { scene: 'Beijing opera', lines: [
          ['A', '你 看 过{guo} 京剧 吗 ？', 'Have you ever seen Beijing opera?'],
          ['B', '偶尔 看 ， 我 喜欢 一边 喝 茶 一边 看 京剧 表演 。', 'Occasionally. I like watching Beijing opera while drinking tea.'],
          ['A', '京剧 演员 的 衣服 十分 漂亮 ！', 'The actors\' costumes are really beautiful!'],
        ]},
        { scene: 'The show', lines: [
          ['A', '今天 的 演出 大概 几 点 结束 ？', "What time will today's show probably finish?"],
          ['B', '大约 十 点 。 很 多 观众 来自 广东 省 。', 'Around ten. Many of the audience come from Guangdong province.'],
        ]},
        { scene: 'A class meeting', lines: [
          ['A', '我们 班 下午 要 讨论 申请 奖学金 的 事 。', "Our class is discussing scholarship applications this afternoon."],
          ['B', '由 谁 负责 ？', "Who's in charge?"],
          ['A', '由 班长 负责 。', 'The class monitor.'],
        ]},
        { scene: 'Reading: opera online', lines: [
          ['📖', '随着 互联网 的 发展 ， 在 网上 看 京剧 越来越 普遍 。', 'With the growth of the internet, watching Beijing opera online is more and more common.'],
          ['📖', '京剧 很 有趣 ， 不过 刚 开始 看 的 时候 ， 稍微 有点儿 难 懂 。 这 很 正常 。', "Beijing opera is fun, but when you first start watching it's a bit hard to follow. That's normal."],
          ['📖', '大家 可以 先 学习 一些 基础 知识 ， 然后 再 去 剧场 看 。', 'You can learn some basics first, then go to the theatre.'],
        ]},
      ],
      grammar: [
        { title: '大概 vs 也许',
          body: '<b>大概</b> = "probably; approximately", a fairly confident estimate, also used with numbers (大概十个人). <b>也许</b> = "perhaps", less certain and not used with numbers.',
          examples: [
            ['演出 大概 十 点 结束 。', 'The show will probably end around ten.'],
            ['也许 他 忘 了 。', 'Maybe he forgot.'],
          ]},
        { title: '偶尔 = occasionally',
          body: '<b>偶尔</b> = once in a while, not often. It is the opposite of 经常.',
          examples: [
            ['我 偶尔 看 京剧 。', 'I occasionally watch Beijing opera.'],
          ]},
        { title: '由 = by (who is responsible)',
          body: '<b>由 + person + verb</b> says who does or is responsible for something.',
          examples: [
            ['由 班长 负责 。', 'The class monitor is responsible.'],
            ['这 次 活动 由 学校 举办 。', 'This event is organised by the school.'],
          ]},
        { title: '进行 = to carry out, to be in progress',
          body: '<b>进行 + two-syllable verb noun</b> (讨论, 比赛, 调查) is formal. <b>正在进行</b> = is in progress.',
          examples: [
            ['比赛 正在 进行 。', 'The match is in progress.'],
            ['我们 对 这 个 问题 进行 了 讨论 。', 'We held a discussion on this question.'],
          ]},
        { title: '随着 = along with, as',
          body: '<b>随着 + a change</b>: as one thing changes, another changes too.',
          examples: [
            ['随着 互联网 的 发展 ， 网上 看 京剧 越来越 普遍 。', 'With the growth of the internet, watching opera online is more common.'],
          ]},
      ],
      culture: { title: 'Chopsticks', body: 'Chinese people have eaten with <b>筷子 (kuàizi)</b> for over 3,000 years. Some good manners: don\'t stick them upright in rice (it looks like incense for the dead), don\'t tap them on the bowl (that\'s what beggars used to do), and don\'t point at people with them. At shared dishes, some families use <b>公筷 (serving chopsticks)</b>.' },
    },

    {
      n: 14, zh: '保护地球母亲', en: 'Protect Mother Earth',
      focus: 'Environment · 够 · 以 (in order to) · 既然 · 于是 vs 因此 · 什么的',
      words: HSK.W4[14],
      dialogues: [
        { scene: 'Rubbish', lines: [
          ['A', '别 把 塑料袋 扔 在 地{dì} 上 ， 要 扔 到 垃圾桶 里 。', "Don't throw plastic bags on the ground. Put them in the bin."],
          ['B', '抱歉 ， 我 马上 捡 起来 。', "Sorry, I'll pick it up right away."],
        ]},
        { scene: 'A business trip', lines: [
          ['A', '这 次 出差 ， 你 乘坐 什么 去 ？', 'How are you travelling for this business trip?'],
          ['B', '坐 火车 ， 既 便宜 又 能 减少 污染 。', 'By train. It\'s cheap and reduces pollution.'],
          ['A', '既然 这样 ， 我 也 坐 火车 吧 。', "In that case, I'll take the train too."],
        ]},
        { scene: 'Hotel toiletries', lines: [
          ['A', '宾馆 卫生间 里 的 牙膏 、 毛巾 什么的 ， 你 用 吗 ？', 'Do you use the toothpaste, towels and so on in hotel bathrooms?'],
          ['B', '我 都 自己 带 ， 这样 可以 减少 浪费 。', 'I bring my own, so there\'s less waste.'],
          ['A', '行 ， 你 真 是 保护 地球 的 好 人 ！', "OK, you really are a friend of the Earth!"],
        ]},
        { scene: 'Reading: Mother Earth', lines: [
          ['📖', '地球 是 我们 的 母亲 。 然而 ， 随着 人口 数量 的 增加 ， 污染 越来越 严重 ， 温度 也 在 升高 。', 'The Earth is our mother. But as the population grows, pollution is getting worse and temperatures are rising.'],
          ['📖', '于是 ， 很 多 国家 开始 鼓励 人们 少 用 塑料袋 ， 以 减少 污染 。', 'So many countries have started encouraging people to use fewer plastic bags, to reduce pollution.'],
          ['📖', '保护 美丽 的 地球 ， 是 我们 每 个 人 的 责任 。', 'Protecting our beautiful Earth is everyone\'s responsibility.'],
        ]},
      ],
      grammar: [
        { title: '够 = enough',
          body: '<b>够</b> can be a verb (钱不够 = there isn\'t enough money) or come before an adjective (够大 = big enough).',
          examples: [
            ['钱 不 够 。', "There isn't enough money."],
            ['这些 菜 够 我们 吃 了 。', "That's enough food for us."],
          ]},
        { title: '以 = in order to; by means of',
          body: 'In the second half of a sentence, <b>以 + verb</b> means "so as to". It is formal and written.',
          examples: [
            ['少 用 塑料袋 ， 以 减少 污染 。', 'Use fewer plastic bags, to reduce pollution.'],
          ]},
        { title: '既然 … 就 … = since, now that …',
          body: '<b>既然</b> takes a known fact as the reason; <b>就</b> gives the conclusion.',
          examples: [
            ['既然 这样 ， 我 也 坐 火车 吧 。', "In that case, I'll take the train too."],
            ['既然 你 不 舒服 ， 就 回 家 休息 吧 。', "Since you're not feeling well, go home and rest."],
          ]},
        { title: '于是 vs 因此',
          body: '<b>于是</b> = "so, and then": one <b>event</b> leads to the next action in a story. <b>因此</b> = "therefore": a <b>logical</b> result, not necessarily an action.',
          examples: [
            ['天 黑 了 ， 于是 我们 回 家 了 。', 'It got dark, so we went home.'],
            ['他 很 努力 ， 因此 成绩 很 好 。', 'He works hard, so his grades are good.'],
          ]},
        { title: '… 什么的 = and so on, etc.',
          body: 'Put <b>什么的</b> after a list of examples, in casual speech.',
          examples: [
            ['我 喜欢 看 书 、 听 音乐 什么的 。', 'I like reading, listening to music and so on.'],
          ]},
      ],
      culture: { title: '"Heaven and humans are one"', body: '<b>天人合一 (tiān rén hé yī)</b> is an old Chinese philosophical idea: humans are part of nature, not its masters. We should live in harmony with the seasons and the land. It shows in traditional gardens, Chinese medicine, and today\'s ideas about protecting the environment.' },
    },

    {
      n: 15, zh: '教育孩子的艺术', en: 'The art of raising children',
      focus: 'Parenting · 想起来 · 弄 · 千万 vs 一定 · 来 (as a stand-in verb) · 左右',
      words: HSK.W4[15],
      dialogues: [
        { scene: 'Piano practice', lines: [
          ['A', '你 儿子 真 棒 ， 弹钢琴 弹 得 这么 好 ！', 'Your son is great, he plays the piano so well!'],
          ['B', '他 刚 开始 学 的 时候 很 害羞 。 我 经常 表扬 他 ， 他 就 越来越 有 信心 了 。', 'He was very shy when he started. I praised him a lot, and he became more and more confident.'],
        ]},
        { scene: 'Lost again', lines: [
          ['孩子', '妈妈 ， 我 的 作业 本 被 我 弄 丢 了 。', 'Mum, I\'ve lost my exercise book.'],
          ['妈妈', '你 怎么 这么 粗心 ？ 千万 别 再 丢 了 ！', 'How can you be so careless? Make sure you don\'t lose it again!'],
          ['孩子', '我 想 起来 了 ， 在 学校 厕所 旁边 ！', 'I remember now, it\'s next to the school toilets!'],
        ]},
        { scene: 'Winter holidays', lines: [
          ['A', '闹钟 响 了 ， 快 醒醒 ！', "The alarm's gone off. Wake up!"],
          ['B', '让 我 再 睡 十 分钟 左右 。', 'Let me sleep another ten minutes or so.'],
          ['A', '寒假 也 不 能 太 懒 ， 起来 整理 一下 房间 。', "You can't be so lazy even in the holidays. Get up and tidy your room."],
          ['B', '好 吧 ， 我 来 。', "OK, I'll do it."],
        ]},
        { scene: 'Reading: praise and criticism', lines: [
          ['📖', '教育 孩子 是 一 门 艺术 。 孩子 做 错 了 事 ， 父母 往往 马上 批评 。', 'Raising children is an art. When a child does something wrong, parents tend to criticise right away.'],
          ['📖', '其实 ， 孩子 常常 不 是 故意 的 。 如果 父母 多 表扬 ， 少 批评 ， 孩子 会 更 自信 。', "In fact, children often don't mean it. If parents praise more and criticise less, children become more confident."],
          ['📖', '但 表扬 也 要 合适 ， 否则 孩子 会 变 得 骄傲 。', 'But praise should be appropriate too, or children become arrogant.'],
        ]},
      ],
      grammar: [
        { title: '想起来 = to remember, to recall',
          body: '<b>想起来</b> = something comes back to mind. Negative: <b>想不起来</b> (can\'t remember).',
          examples: [
            ['我 想 起来 了 ！', 'I remember now!'],
            ['我 想 不 起来 他 的 名字 了 。', "I can't remember his name."],
          ]},
        { title: '弄 = to do, make, handle (general verb)',
          body: 'In speech, <b>弄</b> replaces a more specific verb, often with a result: 弄丢 (lose), 弄坏 (break), 弄好 (fix).',
          examples: [
            ['作业 本 被 我 弄 丢 了 。', "I've lost my exercise book."],
            ['电脑 我 弄 好 了 。', "I've sorted out the computer."],
          ]},
        { title: '千万 vs 一定',
          body: '<b>千万</b> = "be sure to / whatever you do", used for warnings and requests to others, often with 别/不要. <b>一定</b> can also talk about yourself (我一定去) or mean "certainly".',
          examples: [
            ['千万 别 再 丢 了 ！', "Whatever you do, don't lose it again!"],
            ['我 明天 一定 来 。', "I'll definitely come tomorrow."],
          ]},
        { title: '来 as a stand-in verb',
          body: '<b>我来</b> = "let me do it". <b>来 + amount</b> = "give me…" when ordering: 再来一碗米饭.',
          examples: [
            ['好 吧 ， 我 来 。', "OK, I'll do it."],
            ['服务员 ， 再 来 一 碗 米饭 。', 'Waiter, another bowl of rice please.'],
          ]},
        { title: '左右 = about, around',
          body: 'After a number or time: "approximately".',
          examples: [
            ['再 睡 十 分钟 左右 。', 'Sleep another ten minutes or so.'],
          ]},
      ],
      culture: { title: "Mencius' mother moved three times", body: 'The philosopher <b>孟子 (Mencius)</b> grew up with his mother. When they lived near a graveyard, young Mencius played at funerals; near a market, he played at selling. His mother moved again, next to a school, and Mencius began to imitate the students. The story, <b>孟母三迁</b>, shows how much a child\'s surroundings shape them.' },
    },

    {
      n: 16, zh: '生活可以更美好', en: 'Life can be better',
      focus: 'Attitudes · 可 (emphasis) · 恐怕 vs 怕 · 到底 · 拿…来说 · 敢',
      words: HSK.W4[16],
      dialogues: [
        { scene: 'Visa forms', lines: [
          ['A', '我 想 去 中国 参观 ， 签证 表格 怎么 填 ？', 'I want to visit China. How do I fill in the visa form?'],
          ['B', '你 可 千万 别 马虎 ， 号码 和 名字 都 要 写 对 。', "Don't you dare be careless: write the numbers and your name correctly."],
        ]},
        { scene: 'Losing a match', lines: [
          ['A', '比赛 输 了 ， 我 很 失望 。', 'We lost the match. I\'m so disappointed.'],
          ['B', '冷静 一点儿 。 你 到底 为什么 输 了 ？', 'Calm down. Why exactly did you lose?'],
          ['A', '我 太 自信 了 ， 没 重视 对手 。', "I was too confident and didn't take my opponent seriously."],
        ]},
        { scene: 'A reporter', lines: [
          ['A', '那 个 小伙子 是 谁 呀 ？', "Who's that young man?"],
          ['B', '他 是 记者 ， 恐怕 是 来 采访 的 。', "He's a journalist. I suspect he's here for an interview."],
          ['A', '他 很 有 礼貌 ， 我 挺 喜欢 他 的 。', "He's very polite. I quite like him."],
        ]},
        { scene: 'Reading: respect and courage', lines: [
          ['📖', '生活 可以 更 美好 ， 关键 是 要 尊重 别人 ， 也 要 学会 原谅 别人 。', 'Life can be better. The key is to respect others, and to learn to forgive them.'],
          ['📖', '拿 我 来说 ， 以前 我 不 敢 跟 别人 说话 。', "Take me, for example: I used to be afraid to talk to people."],
          ['📖', '后来 当 了 导游 ， 每 天 跟 很 多 人 打交道 ， 慢慢 就 变 得 自信 了 。', 'Then I became a tour guide, dealt with lots of people every day, and gradually became confident.'],
        ]},
      ],
      grammar: [
        { title: '可 = (emphasis) really, do …',
          body: 'In speech, <b>可</b> before a verb or adjective adds strong emphasis, often in warnings.',
          examples: [
            ['你 可 千万 别 马虎 。', "You really mustn't be careless."],
            ['这 可 不 是 小 事 。', 'This is no small matter.'],
          ]},
        { title: '恐怕 vs 怕',
          body: '<b>恐怕</b> = "I\'m afraid (that), probably", a guess about something unwelcome. <b>怕</b> is a verb, "to be afraid of": 我怕狗.',
          examples: [
            ['恐怕 要 下雨 了 。', "I'm afraid it's going to rain."],
            ['我 怕 狗 。', "I'm afraid of dogs."],
          ]},
        { title: '到底 = (in questions) exactly, on earth',
          body: '<b>到底</b> in a question pushes for a clear answer.',
          examples: [
            ['你 到底 为什么 输 了 ？', 'Why exactly did you lose?'],
            ['你 到底 去 不 去 ？', 'Are you going or not?'],
          ]},
        { title: '拿 … 来说 = take … for example',
          body: 'Introduces an example to support what you just said.',
          examples: [
            ['拿 我 来说 ， 以前 我 不 敢 说话 。', "Take me: I used to be afraid to speak."],
          ]},
        { title: '敢 = to dare',
          body: '<b>敢 + verb</b> = to dare to do. Negative: <b>不敢</b>.',
          examples: [
            ['你 敢 一 个 人 去 吗 ？', 'Would you dare go alone?'],
          ]},
      ],
      saying: ['只要功夫深，铁杵磨成针', 'Zhǐyào gōngfu shēn, tiě chǔ mó chéng zhēn', 'With enough effort, an iron rod can be ground into a needle.', 'Persistence achieves anything.'],
    },

    {
      n: 17, zh: '人与自然', en: 'People and nature',
      focus: 'Nature & outings · 倒 · 干 · 趟 vs 次 · 为了…而… · 仍然',
      words: HSK.W4[17],
      dialogues: [
        { scene: 'Summer holidays', lines: [
          ['A', '放暑假 了 ， 我们 去 森林 公园 玩儿 吧 ！', "Summer holidays! Let's go to the forest park!"],
          ['B', '好 啊 ， 那儿 很 凉快 。 离 这儿 多少 公里 ？', "Great, it's nice and cool there. How many kilometres away is it?"],
          ['A', '大约 五十 公里 。', 'About fifty.'],
        ]},
        { scene: 'The zoo', lines: [
          ['A', '你 去 过{guo} 几 趟 动物园 ？', 'How many times have you been to the zoo?'],
          ['B', '两 趟 。 我 最 喜欢 看 老虎 。', 'Twice. I like watching the tigers best.'],
          ['A', '那儿 人 多 吗 ？', 'Is it crowded?'],
          ['B', '周末 很 热闹 ， 入口 要 排队 。', "It's lively at weekends. You have to queue at the entrance."],
        ]},
        { scene: 'Cloud-watching', lines: [
          ['A', '你 在 干 什么 ？', 'What are you doing?'],
          ['B', '我 在 照 云 ， 那 朵 云 像 一 只 小 狗 。', "I'm photographing the clouds. That one looks like a puppy."],
          ['A', '你 倒 挺 有 意思 的 。', "You're quite a character."],
        ]},
        { scene: 'Reading: people and nature', lines: [
          ['📖', '人 与 自然 应该 是 朋友 。 为了 发展 经济 而 破坏 森林 和 海洋 ， 是 不 对 的 。', "People and nature should be friends. Destroying forests and oceans for economic growth is wrong."],
          ['📖', '随着 社会 的 发展 ， 很 多 国家 有 了 严格 的 保护 规定 。', 'As society develops, many countries have strict protection rules.'],
          ['📖', '然而 ， 仍然 有 很 多 动物 的 数量 在 减少 。', 'Yet the numbers of many animals are still falling.'],
        ]},
      ],
      grammar: [
        { title: '倒 = (contrary to expectation) actually',
          body: '<b>倒</b> marks something <b>unexpected</b> or a <b>contrast</b> with what came before.',
          examples: [
            ['你 倒 挺 有 意思 的 。', "You're actually quite interesting."],
            ['这 件 衣服 不 贵 ， 质量 倒 不错 。', "This isn't expensive, but the quality is actually good."],
          ]},
        { title: '干 = to do (spoken)',
          body: '<b>干</b> (gàn) is a casual <b>做</b>: 干什么 = what are you up to.',
          examples: [
            ['你 在 干 什么 ？', 'What are you doing?'],
            ['干 得 好 ！', 'Well done!'],
          ]},
        { title: '趟 vs 次',
          body: '<b>趟</b> counts <b>trips</b> (going and coming back). <b>次</b> counts any occurrence.',
          examples: [
            ['我 去 一 趟 超市 。', "I'm popping to the supermarket."],
            ['这 个 电影 我 看 过{guo} 三 次 。', "I've seen this film three times."],
          ]},
        { title: '为了 … 而 … = do … for the sake of …',
          body: 'The purpose goes after <b>为了</b>, the action after <b>而</b>. Formal.',
          examples: [
            ['他 为了 理想 而 努力 。', 'He works hard for his dream.'],
          ]},
        { title: '仍然 = still',
          body: '<b>仍然</b> = something continues <b>unchanged</b>, even after time or effort. More formal than 还.',
          examples: [
            ['十 年 过去 了 ， 他 仍然 住 在 那儿 。', "Ten years on, he still lives there."],
          ]},
      ],
      culture: { title: "The giant panda, China's national treasure", body: 'The <b>大熊猫 (dà xióngmāo)</b> lives in the bamboo forests of Sichuan, Shaanxi and Gansu, and eats up to 12 kg of bamboo a day. Pandas were once endangered, but thanks to reserves and breeding centres like the one in Chengdu, their status improved to "vulnerable" in 2016. China lends pandas to zoos abroad as a sign of friendship, known as <b>熊猫外交</b>, "panda diplomacy".' },
    },

    {
      n: 18, zh: '科技与世界', en: 'Technology and the world',
      focus: 'Technology & daily life · 是否 · 受不了 · 接着 vs 然后 · 除此以外 · 把…叫作…',
      words: HSK.W4[18],
      dialogues: [
        { scene: 'Lost in the city', lines: [
          ['A', '我 迷路 了 ， 你 能 告诉 我 邮局 的 地址 吗 ？', "I'm lost. Can you tell me the post office's address?"],
          ['B', '你 用 手机 地图 查 一下 ， 几 秒 就 能 找 到 。', "Look it up on your phone's map. You'll find it in seconds."],
        ]},
        { scene: 'Paying online', lines: [
          ['A', '在 网站 上 付款 安全 吗 ？', 'Is it safe to pay on websites?'],
          ['B', '只要 不 告诉 别人 密码 ， 一般 没 问题 。', "As long as you don't tell anyone your password, it's usually fine."],
          ['A', '现在 连 信封 都 很 少 有 人 用 了 。', 'Now hardly anyone even uses envelopes.'],
        ]},
        { scene: 'Landing', lines: [
          ['A', '飞机 几 点 降落 ？', 'What time does the plane land?'],
          ['B', '九 点 。 接着 我们 坐 出租车 去 宾馆 。', "Nine. Then we'll take a taxi to the hotel."],
          ['A', '这 里 的 交通 太 堵 了 ， 我 真 受不了 ！', "The traffic here is terrible. I can't stand it!"],
        ]},
        { scene: 'Reading: the information age', lines: [
          ['📖', '二十一 世纪 是 信息 的 世纪 。 随着 技术 的 发展 ， 我们 的 生活 方式 发生 了 很 大 的 变化 。', 'The 21st century is the century of information. As technology develops, our way of life has changed enormously.'],
          ['📖', '以前 人们 写 信 、 写 日记 ， 现在 大家 在 网上 发 信息 。 除此以外 ， 用 手机 就 可以 付款 ， 人们 把 这 叫作 “ 无 现金 生活 ” 。', 'People used to write letters and diaries; now everyone sends messages online. Besides that, you can pay with your phone, which people call "cashless living".'],
          ['📖', '不过 ， 网上 也 有 危险 ， 我们 要 判断 信息 是否 正确 。', 'But the internet has dangers too. We need to judge whether information is correct.'],
        ]},
      ],
      grammar: [
        { title: '是否 = whether (or not)',
          body: '<b>是否</b> is a formal <b>是不是</b>, often after verbs like 知道, 判断, 考虑.',
          examples: [
            ['我们 要 判断 信息 是否 正确 。', 'We need to judge whether the information is correct.'],
            ['我 不 知道 他 是否 会 来 。', "I don't know whether he'll come."],
          ]},
        { title: '受不了 = can\'t stand',
          body: '<b>受不了</b> = something is too much to bear. 受得了 = can bear it.',
          examples: [
            ['我 真 受不了 ！', "I really can't stand it!"],
          ]},
        { title: '接着 vs 然后',
          body: '<b>接着</b> = "right after, next", with no break between the actions. <b>然后</b> = "then, afterwards", and there can be a gap.',
          examples: [
            ['他 说 完 ， 接着 又 唱 了 一 首 歌 。', 'When he finished speaking, he went straight on to sing a song.'],
            ['我们 先 吃饭 ， 然后 去 看 电影 。', "We'll eat first, then go to the cinema."],
          ]},
        { title: '除此以外 = besides this, apart from that',
          body: 'Adds one more point after what was just said. Formal.',
          examples: [
            ['除此以外 ， 用 手机 就 可以 付款 。', 'Besides that, you can pay with your phone.'],
          ]},
        { title: '把 A 叫作 B = call A "B"',
          body: 'Gives something a name or label.',
          examples: [
            ['人们 把 这 叫作 “ 无 现金 生活 ” 。', 'People call this "cashless living".'],
          ]},
      ],
      culture: { title: 'Weibo and WeChat', body: 'Two apps shape Chinese online life. <b>微博 (Wēibó)</b> is like Twitter: short public posts, celebrity news and trending topics. <b>微信 (Wēixìn, WeChat)</b> is an everything-app: messages and voice notes, video calls, group chats, a news feed called <b>朋友圈 ("Moments")</b>, payments, mini-programs and even hospital appointments. Many people spend hours a day in it.' },
    },

    {
      n: 19, zh: '生活的味道', en: 'The flavour of life',
      focus: 'Everyday life · question words for "some-" · 上 (on, closed) · 出来 vs 起来 · 总的来说 · 在于',
      words: HSK.W4[19],
      dialogues: [
        { scene: 'A busy line', lines: [
          ['A', '喂 ， 你 的 电话 怎么 一直 占线 ？ 我 有 点儿 事 找 你 。', 'Hello? Why has your phone been busy all this time? I need to talk to you about something.'],
          ['B', '什么 事 ？', "What's up?"],
          ['A', '房东 说 下 个 学期 的 房租 要 涨 了 。', "The landlord says the rent's going up next semester."],
        ]},
        { scene: 'Making dumplings', lines: [
          ['A', '你 包 的 饺子 真 好吃 ！', 'Your dumplings are delicious!'],
          ['B', '我 是 在 北方 出生 的 ， 从 小 就 在 厨房 里 帮 妈妈 包 饺子 。', 'I was born in the north. I\'ve helped my mum make dumplings in the kitchen since I was little.'],
        ]},
        { scene: 'Sport', lines: [
          ['A', '我们 去 打 乒乓球 还是 羽毛球 ？', 'Shall we play table tennis or badminton?'],
          ['B', '我 胳膊 疼 ， 抬 不 起来 ， 今天 不 打 了 。', "My arm hurts, I can't lift it. Not today."],
          ['A', '那 我们 去 看 一 场 功夫 表演 吧 。', "Then let's go and watch a kung fu show."],
        ]},
        { scene: 'Reading: the flavour of life', lines: [
          ['📖', '生活 的 味道 在于 小 事 ： 早上 吃 一 个 热 包子 ， 跟 邻居 打 个 招呼 ， 晚上 跟 家人 一起 包 饺子 。', 'The flavour of life lies in small things: a hot bun in the morning, saying hello to the neighbours, making dumplings with the family at night.'],
          ['📖', '总的来说 ， 幸福 不 在于 钱 多 钱 少 ， 而 在于 你 是否 用 心 生活 。', "All in all, happiness doesn't depend on how much money you have, but on whether you live with care."],
        ]},
      ],
      grammar: [
        { title: 'Question words meaning "some-/any-"',
          body: 'Without a question mark, <b>什么 / 哪儿 / 谁</b> can mean "something / somewhere / someone".',
          examples: [
            ['我 好像 在 哪儿 见 过{guo} 他 。', "I think I've seen him somewhere."],
            ['你 饿 了 就 吃 点儿 什么 吧 。', "If you're hungry, eat something."],
          ]},
        { title: 'Verb + 上 = on, closed, attached',
          body: '<b>上</b> after a verb shows something being put on, closed or joined: 戴上 (put on glasses), 关上 (close), 穿上 (put on clothes).',
          examples: [
            ['请 关 上 门 。', 'Please close the door.'],
            ['他 戴 上 眼镜 看 书 。', 'He put on his glasses to read.'],
          ]},
        { title: '出来 vs 起来',
          body: '<b>出来</b> = something comes out / is worked out or recognised: 看出来, 想出来 (think up an idea). <b>起来</b> = something comes back to mind (想起来) or starts (笑起来).',
          examples: [
            ['我 看 出来 了 ， 你 不 高兴 。', 'I can tell you\'re unhappy.'],
            ['我 想 出来 一 个 好 办法 。', 'I\'ve thought up a good idea.'],
          ]},
        { title: '总的来说 = all in all, in general',
          body: 'Starts a <b>summary</b>.',
          examples: [
            ['总的来说 ， 这 次 旅行 很 愉快 。', 'All in all, the trip was enjoyable.'],
          ]},
        { title: 'A 在于 B = A lies in B',
          body: '<b>在于</b> points to the key factor. It often comes in the pattern <b>不在于…而在于…</b>.',
          examples: [
            ['问题 在于 我们 没有 时间 。', "The problem is that we don't have time."],
          ]},
      ],
      culture: { title: 'Jiaozi: a taste of China', body: '<b>饺子 (jiǎozi)</b> are dumplings of thin dough folded around meat and vegetables, then boiled, steamed or fried. In northern China families make them together on New Year\'s Eve; their shape is like old silver ingots, so they stand for wealth. Sometimes a coin is hidden in one dumpling, and whoever finds it will have good luck all year.' },
    },

    {
      n: 20, zh: '路上的风景', en: 'The view along the way',
      focus: 'Travel · V着V着 · 一…就… · 究竟 vs 到底 · 起来 (begin) · V得起 / V不起',
      words: HSK.W4[20],
      dialogues: [
        { scene: 'Ready to go', lines: [
          ['A', '行李 收拾 好 了 吗 ？ 我们 八 点 出发 。', 'Are the bags packed? We leave at eight.'],
          ['B', '好 了 。 钥匙 和 登机牌 都 在 包 里 。', 'Yes. The keys and boarding passes are in the bag.'],
          ['A', '航班 推迟 了 半 个 小时 ， 不 着急 。', 'The flight has been delayed half an hour, no rush.'],
        ]},
        { scene: 'Food in the capital', lines: [
          ['A', '到 了 首都 ， 一定 要 吃 烤鸭 ！', 'When we get to the capital, we must eat roast duck!'],
          ['B', '我 还 想 尝尝 那儿 的 小吃 ， 酸 的 、 辣 的 我 都 喜欢 。', 'I want to try the snacks there too. I love sour and spicy things.'],
          ['A', '干杯 ！ 祝贺 你 考试 合格 了 ！', 'Cheers! Congratulations on passing your exam!'],
        ]},
        { scene: 'On the motorway', lines: [
          ['A', '高速公路 上 车 太 多 ， 我们 在 加油站 休息 一下 吧 。', "There's too much traffic on the motorway. Let's take a break at the petrol station."],
          ['B', '好 ， 对面 那 棵 树 下面 挺 凉快 的 。', 'OK, it\'s quite cool under that tree opposite.'],
          ['A', '你 究竟 想 什么 时候 到 ？', 'When exactly do you want to arrive?'],
        ]},
        { scene: 'Reading: the view along the way', lines: [
          ['📖', '旅行 的 时候 ， 路 上 的 风景 往往 比 目的地 更 美 。', "When travelling, the view along the way is often more beautiful than the destination."],
          ['📖', '我们 开 着 开 着 ， 就 看 到 了 一 个 少数 民族 的 村子 。 那儿 的 人 普通话 说 得 不 太 好 ， 可是 非常 热情 。', "As we drove on, we came to a village of an ethnic minority. The people there didn't speak much Mandarin, but they were very welcoming."],
          ['📖', '他们 一 看 见 我们 就 笑 起来 ， 请 我们 喝 香 香 的 汤 。 贵 的 宾馆 我们 住 不 起 ， 可是 这样 的 回忆 是 钱 买 不 到 的 。', "As soon as they saw us they started smiling, and offered us fragrant soup. We can't afford expensive hotels, but memories like this can't be bought."],
        ]},
      ],
      grammar: [
        { title: 'V着 V着 = while (doing), gradually',
          body: 'Repeat <b>verb + 着</b> to show that <b>during</b> an ongoing action something else happens.',
          examples: [
            ['我们 开 着 开 着 ， 就 看 到 了 一 个 村子 。', 'As we drove on, we came to a village.'],
            ['孩子 哭 着 哭 着 就 睡着 了 。', 'The child cried and cried until falling asleep.'],
          ]},
        { title: '一 … 就 … = as soon as …',
          body: 'The second action follows <b>immediately</b> after the first.',
          examples: [
            ['他们 一 看 见 我们 就 笑 起来 。', 'As soon as they saw us, they started smiling.'],
            ['我 一 到 家 就 给 你 打电话 。', "I'll call you as soon as I get home."],
          ]},
        { title: '究竟 vs 到底',
          body: 'Both mean "(what) exactly / on earth" in questions. <b>究竟</b> is more formal; <b>到底</b> is more spoken and can also mean "in the end, after all".',
          examples: [
            ['你 究竟 想 什么 时候 到 ？', 'When exactly do you want to get there?'],
          ]},
        { title: 'Verb + 起来 = start to …',
          body: '<b>起来</b> after a verb or adjective shows a new action or state <b>beginning</b>. With an object: 下起雨来.',
          examples: [
            ['大家 都 笑 起来 了 。', 'Everyone started laughing.'],
            ['天气 热 起来 了 。', "It's getting hot."],
          ]},
        { title: 'V 得起 / V 不起 = can / can\'t afford to',
          body: '<b>买得起</b> = can afford to buy; <b>住不起</b> = can\'t afford to stay (somewhere).',
          examples: [
            ['贵 的 宾馆 我们 住 不 起 。', "We can't afford expensive hotels."],
            ['这么 贵 的 东西 ， 我 买 不 起 。', "I can't afford something this expensive."],
          ]},
      ],
      culture: { title: "China's ethnic groups", body: 'China officially has <b>56 民族 (mínzú)</b>. The <b>汉族 (Han)</b> make up about 91%, and the other 55 are <b>少数民族 (ethnic minorities)</b>, such as the Zhuang, Uyghur, Hui, Miao, Tibetan and Mongolian peoples. Many have their own languages, clothing, festivals and food, for example the Dai water-splashing festival and the Mongolian Naadam games.' },
    },
  ],

  extra: [
    ['祝', 'zhù', 'to wish', ''],
    ['一些', 'yì xiē', 'some; a few', ''],
    ['值', 'zhí', 'to be worth', ''],
    ['弹', 'tán', 'to play (an instrument)', ''],
    ['抽', 'chōu', 'to smoke; to draw out', ''],
    ['父母', 'fù mǔ', 'parents', ''],
    ['之间', 'zhī jiān', 'between', ''],
    ['早晚', 'zǎo wǎn', 'sooner or later', ''],
    ['网上', 'wǎng shang', 'online', ''],
    ['再说', 'zài shuō', 'besides; what\'s more', ''],
    ['俗话', 'sú huà', 'common saying', ''],
    ['一分钱一分货', 'yì fēn qián yì fēn huò', 'you get what you pay for', ''],
    ['外国', 'wài guó', 'foreign country', ''],
    ['一半', 'yí bàn', 'half', ''],
    ['书店', 'shū diàn', 'bookshop', ''],
    ['老板', 'lǎo bǎn', 'boss; owner', ''],
    ['读书', 'dú shū', 'to read; to study', ''],
    ['两千', 'liǎng qiān', 'two thousand', ''],
    ['晚饭', 'wǎn fàn', 'dinner', ''],
    ['保持', 'bǎo chí', 'to keep; maintain', ''],
    ['散散步', 'sàn san bù', 'take a little walk', ''],
    ['游游泳', 'yóu you yǒng', 'have a swim', ''],
    ['聊聊天', 'liáo liao tiān', 'have a chat', ''],
    ['可不是', 'kě bu shì', 'exactly! you said it', ''],
    ['嘛', 'ma', 'particle (obviously)', ''],
    ['小时候', 'xiǎo shí hou', 'in childhood', ''],
    ['那时', 'nà shí', 'at that time', ''],
    ['笑声', 'xiào shēng', 'laughter', ''],
    ['人们', 'rén men', 'people', ''],
    ['爱迪生', 'Ài dí shēng', 'Edison', ''],
    ['电灯', 'diàn dēng', 'electric light', ''],
    ['劝', 'quàn', 'to urge; persuade', ''],
    ['只是', 'zhǐ shì', 'merely; just', ''],
    ['风雨', 'fēng yǔ', 'wind and rain; hardship', ''],
    ['知足', 'zhī zú', 'content', ''],
    ['填', 'tián', 'to fill in', ''],
    ['哪里', 'nǎ li', 'where; (modest) not at all', ''],
    ['用法', 'yòng fǎ', 'usage', ''],
    ['谈谈', 'tán tan', 'have a talk', ''],
    ['观察', 'guān chá', 'to observe', ''],
    ['广东', 'Guǎng dōng', 'Guangdong', ''],
    ['奖学金', 'jiǎng xué jīn', 'scholarship', ''],
    ['班长', 'bān zhǎng', 'class monitor', ''],
    ['剧场', 'jù chǎng', 'theatre', ''],
    ['捡', 'jiǎn', 'to pick up', ''],
    ['什么的', 'shén me de', 'and so on', ''],
    ['人口', 'rén kǒu', 'population', ''],
    ['升高', 'shēng gāo', 'to rise', ''],
    ['对手', 'duì shǒu', 'opponent', ''],
    ['采访', 'cǎi fǎng', 'to interview (as a reporter)', ''],
    ['美好', 'měi hǎo', 'fine; happy', ''],
    ['学会', 'xué huì', 'to learn (how to)', ''],
    ['打交道', 'dǎ jiāo dao', 'to deal with (people)', ''],
    ['来说', 'lái shuō', '(in 对…来说 / 拿…来说) for', ''],
    ['动物园', 'dòng wù yuán', 'zoo', ''],
    ['破坏', 'pò huài', 'to destroy', ''],
    ['堵', 'dǔ', 'blocked; jammed', ''],
    ['除此以外', 'chú cǐ yǐ wài', 'apart from this', ''],
    ['叫作', 'jiào zuò', 'to be called', ''],
    ['首', 'shǒu', 'measure word for songs, poems', ''],
    ['房租', 'fáng zū', 'rent', ''],
    ['涨', 'zhǎng', 'to rise (prices)', ''],
    ['招呼', 'zhāo hu', 'greeting', ''],
    ['总的来说', 'zǒng de lái shuō', 'all in all', ''],
    ['家人', 'jiā rén', 'family members', ''],
    ['在于', 'zài yú', 'to lie in; depend on', ''],
    ['行李', 'xíng li', 'luggage', ''],
    ['风景', 'fēng jǐng', 'scenery; view', ''],
    ['目的地', 'mù dì dì', 'destination', ''],
    ['少数', 'shǎo shù', 'minority', ''],
    ['村子', 'cūn zi', 'village', ''],
    ['醒醒', 'xǐng xing', 'wake up!', ''],
    ['发', 'fā', 'to send; to lose (temper)', ''],
    ['作业本', 'zuò yè běn', 'exercise book', ''],
    ['朵', 'duǒ', 'measure word for clouds, flowers', ''],
    ['门', 'mén', 'measure word for subjects, skills', ''],
    ['家', 'jiā', 'measure word for companies, shops', ''],
    ['片', 'piàn', 'measure word for leaves, slices', ''],
    ['碗', 'wǎn', 'bowl', ''],
    ['满头大汗', 'mǎn tóu dà hàn', 'dripping with sweat', ''],
    ['二十一', 'èr shí yī', 'twenty-one', ''],
    ['常常', 'cháng cháng', 'often', ''],
    ['变', 'biàn', 'to change; become', ''],
    ['尝尝', 'cháng chang', 'have a taste', ''],
    ['香香', 'xiāng xiāng', 'nice and fragrant', ''],
  ],
});
