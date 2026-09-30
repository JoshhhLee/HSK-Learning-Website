/* Pinyin & pronunciation reference data. Example characters are chosen so the
 * browser voice reads them with a single, unambiguous pronunciation. */
HSK.pinyin = {
  tones: [
    { n: 1, mark: 'ā', name: '1st tone', shape: 'high & flat', tip: 'Hold a steady high note, like singing "laaa".', contour: [[0, 10], [100, 10]] },
    { n: 2, mark: 'á', name: '2nd tone', shape: 'rising', tip: 'Rises like asking "what?" in surprise.', contour: [[0, 55], [100, 10]] },
    { n: 3, mark: 'ǎ', name: '3rd tone', shape: 'low dip', tip: 'Drops low, then comes back up. In fast speech it often stays low.', contour: [[0, 45], [45, 90], [100, 35]] },
    { n: 4, mark: 'à', name: '4th tone', shape: 'falling', tip: 'Short and sharp, like a firm "No!"', contour: [[0, 10], [100, 90]] },
    { n: 5, mark: 'a', name: 'neutral', shape: 'light & short', tip: 'Quick and soft, with no tone of its own.', contour: [[40, 55], [60, 55]] },
  ],

  /* Tone quartets: same syllable, four tones. */
  quartets: [
    [['妈', 'mā', 'mother'], ['麻', 'má', 'hemp'], ['马', 'mǎ', 'horse'], ['骂', 'mà', 'to scold']],
    [['八', 'bā', 'eight'], ['拔', 'bá', 'to pull'], ['把', 'bǎ', 'to hold'], ['爸', 'bà', 'dad']],
    [['衣', 'yī', 'clothes'], ['姨', 'yí', 'aunt'], ['椅', 'yǐ', 'chair'], ['意', 'yì', 'meaning']],
    [['诗', 'shī', 'poem'], ['十', 'shí', 'ten'], ['使', 'shǐ', 'to use'], ['是', 'shì', 'to be']],
    [['屋', 'wū', 'house'], ['无', 'wú', 'without'], ['五', 'wǔ', 'five'], ['雾', 'wù', 'fog']],
    [['汤', 'tāng', 'soup'], ['糖', 'táng', 'sugar'], ['躺', 'tǎng', 'to lie down'], ['烫', 'tàng', 'scalding']],
    [['七', 'qī', 'seven'], ['骑', 'qí', 'to ride'], ['起', 'qǐ', 'to rise'], ['气', 'qì', 'air']],
    [['飞', 'fēi', 'to fly'], ['肥', 'féi', 'fat'], ['匪', 'fěi', 'bandit'], ['费', 'fèi', 'fee']],
    [['通', 'tōng', 'to pass'], ['同', 'tóng', 'same'], ['桶', 'tǒng', 'bucket'], ['痛', 'tòng', 'pain']],
    [['温', 'wēn', 'warm'], ['文', 'wén', 'writing'], ['稳', 'wěn', 'steady'], ['问', 'wèn', 'to ask']],
  ],

  initials: [
    { group: 'Lips', items: [
      ['b', '八', 'bā', 'like "b" in "spy": no puff of air'],
      ['p', '怕', 'pà', 'like "p" in "pie": strong puff of air'],
      ['m', '妈', 'mā', 'like English "m"'],
      ['f', '飞', 'fēi', 'like English "f"'],
    ]},
    { group: 'Tongue tip', items: [
      ['d', '大', 'dà', 'like "t" in "stop": no puff'],
      ['t', '他', 'tā', 'like "t" in "top": strong puff'],
      ['n', '你', 'nǐ', 'like English "n"'],
      ['l', '来', 'lái', 'like English "l"'],
    ]},
    { group: 'Back of tongue', items: [
      ['g', '哥', 'gē', 'like "k" in "sky": no puff'],
      ['k', '渴', 'kě', 'like "k" in "kite": strong puff'],
      ['h', '好', 'hǎo', 'rougher than English "h", like Scottish "loch"'],
    ]},
    { group: 'Flat tongue (front of mouth)', items: [
      ['j', '鸡', 'jī', 'like "j" in "jeep", with the tongue flat behind the lower teeth'],
      ['q', '七', 'qī', 'like "ch" in "cheese", with a puff of air'],
      ['x', '西', 'xī', 'between "s" and "sh", smiling'],
    ]},
    { group: 'Curled tongue (retroflex)', items: [
      ['zh', '知', 'zhī', 'like "j" in "judge" with the tongue tip curled back'],
      ['ch', '吃', 'chī', 'like "ch" in "church", curled, with a puff'],
      ['sh', '是', 'shì', 'like "sh" in "shirt", curled'],
      ['r', '热', 'rè', 'like "r" in "pleasure", curled'],
    ]},
    { group: 'Teeth (tongue behind upper teeth)', items: [
      ['z', '字', 'zì', 'like "ds" in "cards"'],
      ['c', '菜', 'cài', 'like "ts" in "cats", with a puff'],
      ['s', '四', 'sì', 'like English "s"'],
    ]},
  ],

  finals: [
    { group: 'Simple', items: [
      ['a', '啊', 'ā', 'as in "father"'], ['o', '我', 'wǒ', 'as in "or" (after b p m f w)'], ['e', '饿', 'è', 'like "uh" said from the throat'],
      ['i', '一', 'yī', 'as in "see"'], ['u', '五', 'wǔ', 'as in "moon"'], ['ü', '鱼', 'yú', 'say "ee" with rounded lips'],
      ['er', '二', 'èr', 'like "are" with the tongue curled'],
    ]},
    { group: 'Compound', items: [
      ['ai', '爱', 'ài', 'as in "eye"'], ['ei', '飞', 'fēi', 'as in "day"'], ['ao', '好', 'hǎo', 'as in "how"'], ['ou', '狗', 'gǒu', 'as in "go"'],
      ['ia', '家', 'jiā', '"ee-ah"'], ['ie', '谢', 'xiè', '"ee-eh"'], ['iao', '小', 'xiǎo', '"ee-ow"'], ['iu', '九', 'jiǔ', '"ee-oh" (iou)'],
      ['ua', '花', 'huā', '"wa"'], ['uo', '国', 'guó', '"waw"'], ['uai', '块', 'kuài', '"why"'], ['ui', '水', 'shuǐ', '"way" (uei)'],
      ['üe', '学', 'xué', '"ü-eh"'],
    ]},
    { group: 'Nasal (-n / -ng)', items: [
      ['an', '看', 'kàn', '"ahn"'], ['en', '人', 'rén', '"un" as in "under"'], ['in', '您', 'nín', '"een"'], ['un', '问', 'wèn', '"wun" (uen)'],
      ['ün', '云', 'yún', '"ü-n"'], ['ian', '钱', 'qián', '"yen"'], ['uan', '关', 'guān', '"wahn"'], ['üan', '远', 'yuǎn', '"ü-en"'],
      ['ang', '忙', 'máng', '"ahng"'], ['eng', '冷', 'lěng', '"ung" as in "lung"'], ['ing', '星', 'xīng', '"eeng"'], ['ong', '中', 'zhōng', '"oong"'],
      ['iang', '想', 'xiǎng', '"yahng"'], ['uang', '王', 'wáng', '"wahng"'], ['iong', '用', 'yòng', '"yoong"'],
    ]},
  ],

  /* Easily confused sounds: listen, then pick which one you heard. */
  pairs: [
    { label: 'j / zh', items: [['鸡', 'jī'], ['知', 'zhī']] },
    { label: 'q / ch', items: [['七', 'qī'], ['吃', 'chī']] },
    { label: 'x / sh', items: [['西', 'xī'], ['诗', 'shī']] },
    { label: 'z / zh', items: [['字', 'zì'], ['志', 'zhì']] },
    { label: 'c / ch', items: [['菜', 'cài'], ['柴', 'chái']] },
    { label: 's / sh', items: [['四', 'sì'], ['是', 'shì']] },
    { label: 'b / p', items: [['八', 'bā'], ['趴', 'pā']] },
    { label: 'd / t', items: [['大', 'dà'], ['踏', 'tà']] },
    { label: 'g / k', items: [['哥', 'gē'], ['科', 'kē']] },
    { label: 'n / l', items: [['你', 'nǐ'], ['里', 'lǐ']] },
    { label: 'i / ü', items: [['一', 'yī'], ['鱼', 'yú']] },
    { label: 'u / ü', items: [['路', 'lù'], ['绿', 'lǜ']] },
    { label: '-n / -ng', items: [['心', 'xīn'], ['星', 'xīng']] },
    { label: '-an / -ang', items: [['三', 'sān'], ['桑', 'sāng']] },
    { label: '-en / -eng', items: [['门', 'mén'], ['蒙', 'méng']] },
  ],

  rules: [
    { title: '3rd + 3rd → 2nd + 3rd', body: 'Two 3rd tones in a row: the first becomes 2nd tone. 你好 nǐ hǎo is said <b>ní hǎo</b>. 很好 hěn hǎo is said <b>hén hǎo</b>. It\'s still written as 3rd tone.' },
    { title: '不 bù → bú before a 4th tone', body: '不是 <b>bú shì</b>, 不对 <b>bú duì</b>, 不客气 <b>bú kèqi</b>. Everywhere else 不 stays bù: 不好 bù hǎo, 不来 bù lái.' },
    { title: '一 yī changes too', body: 'Alone, in counting, dates and numbers it is <b>yī</b>. Before a 4th tone it becomes <b>yí</b> (一个 yí gè). Before tones 1/2/3 it becomes <b>yì</b> (一本 yì běn, 一起 yìqǐ).' },
    { title: 'Where does the tone mark go?', body: 'On <b>a</b> or <b>e</b> if present. In <b>ou</b> it goes on o. Otherwise it goes on the <b>last</b> vowel: guó, xiū, shuǐ.' },
    { title: 'ü after j q x y', body: 'After j, q, x and y the two dots are dropped: ju, qu, xu, yu are all really <b>jü, qü, xü, yü</b>. After n and l the dots stay: nǚ, lǜ.' },
    { title: 'y and w', body: 'Syllables that start with i, u or ü are written with y/w: i → <b>yi</b>, ia → <b>ya</b>, u → <b>wu</b>, uo → <b>wo</b>, ü → <b>yu</b>.' },
  ],
};

/* The basic strokes of Chinese characters. */
HSK.strokes = [
  ['横', 'héng', 'horizontal', '一', '㇐'],
  ['竖', 'shù', 'vertical', '十', '㇑'],
  ['撇', 'piě', 'left-falling', '八', '㇒'],
  ['点', 'diǎn', 'dot', '六', '㇔'],
  ['捺', 'nà', 'right-falling', '八', '㇏'],
  ['提', 'tí', 'rising', '我', '㇀'],
  ['横折', 'héngzhé', 'horizontal-turn', '口', '㇕'],
  ['横撇', 'héngpiě', 'horizontal-left-fall', '水', '㇇'],
  ['横钩', 'hénggōu', 'horizontal-hook', '你', '㇖'],
  ['竖提', 'shùtí', 'vertical-rise', '以', '㇙'],
  ['竖钩', 'shùgōu', 'vertical-hook', '小', '㇚'],
  ['竖弯钩', 'shùwāngōu', 'vertical-bend-hook', '儿', '㇟'],
  ['横折弯钩', 'héngzhéwāngōu', 'horizontal-turn-bend-hook', '九', '㇈'],
  ['撇折', 'piězhé', 'left-fall-turn', '东', '㇜'],
  ['撇点', 'piědiǎn', 'left-fall-dot', '女', '㇛'],
  ['斜钩', 'xiégōu', 'slanting hook', '我', '㇂'],
  ['卧钩', 'wògōu', 'lying hook', '心', '㇃'],
];
