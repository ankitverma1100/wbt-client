/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom";
import { useState } from "react";
import Welcome from "../../Common/Welcome";
import "./ruleMani.scss"

const LangIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="translation" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M140 188h584v164h76V144c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h544v-76H140V188z"></path><path d="M414.3 256h-60.6c-3.4 0-6.4 2.2-7.6 5.4L219 629.4c-.3.8-.4 1.7-.4 2.6 0 4.4 3.6 8 8 8h55.1c3.4 0 6.4-2.2 7.6-5.4L322 540h196.2L422 261.4a8.42 8.42 0 00-7.7-5.4zm12.4 228h-85.5L384 360.2 426.7 484zM936 528H800v-93c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v93H592c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h136v152c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V752h136c13.3 0 24-10.7 24-24V552c0-13.3-10.7-24-24-24zM728 680h-88v-80h88v80zm160 0h-88v-80h88v80z"></path></svg>
);
const AlertIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path></svg>
);


const Rule = () => {
  // Always true on page load / refresh
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("hindi");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <Welcome handleClose={handleClose} />}
      <div className="rule-main-wrapper">
        <div className="main_menu_btn">
          <Link className="btn rules-btn" id="create_bets" to="/main/dashboard">
            MAIN MENU
          </Link>
        </div>
        <div className="rule-tab-wrapper">
          <div className="tab-control-container">
            <div className={`tab-segmented-control ${activeTab}-active`}>
              {/* Add the sliding background element */}
              <div className="sliding-bg"></div>

              <button
                onClick={() => setActiveTab("hindi")}
                className={`tab-button ${activeTab === "hindi" ? "active" : ""}`}
              >
                <span className="tab-icon"><LangIcon /></span>
                <span className="tab-text">हिंदी</span>
              </button>
              <button
                onClick={() => setActiveTab("english")}
                className={`tab-button ${activeTab === "english" ? "active" : ""}`}
              >
                <span className="tab-icon"><LangIcon /></span>
                <span className="tab-text">English</span>
              </button>
            </div>
          </div>

          <div className="rule-tab-content">
            {/* Conditionally render Hindi content */}
            {activeTab === "hindi" && (
              <div id="hindi">
                <h1 className="heading">खेल नियम और शर्तें</h1>
                <div className="content">
                  <p className="rule-alert-message"><AlertIcon />कृपया नियमों को समझने के लिए यहां कुछ मिनट दें, और अपने अनुसार समझ लें।</p>
                  <div className="rule-note-line">
                    <span>NOTE: ग्राउंड कमेटी पर लगी शर्त बिना किसी सूचना या स्पष्टीकरण के हटा दी जाएगी</span>
                  </div>
                  <div className="rule-empty-box">
                    <div className="rule-empty-icon">
                      <span />
                      <span />
                    </div>
                    <div className="rule-empty-text">NO DATA</div>
                  </div>
                  <h2 className="sub-heading" >सामान्य नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> सभी डीलर्स से निवेदन है कि क्लाइंट्स को साइट के रूल्स समझाने के बाद ही सौदे करवायें।</li>
                    <li><strong>2.</strong> अगर आप इस एग्रीमेंट को ऐक्सेप्ट नहीं करते हे तो कोई सौदा नहीं कीजिये।</li>
                    <li><strong>3.</strong> सर्वर या वेबसाइट में किसी तरह की खराबी आने या बंद हो जाने पर केवल किए गए सौदे ही मान्य होंगे | ऐसी स्तिथि में किसी तरह का वाद-विवाद मान्य नहीं होगा</li>
                    <li><strong>4.</strong> कंपनी के पास अधिकार है कि वे किसी भी ऐड/शर्तों को निलंबित/रद्द करें अगर यह गलतफहमी साबित होता है। उदाहरण स्वरूप, वीपीएन/रोबोट-प्रयोग/एक ही आईपी से एकाधिक प्रवेश की स्थिति में और अन्य। ध्यान दें: केवल जीतने वाली शर्तें ही रद्द की जाएँगी।</li>
                    <li><strong>5.</strong> कंपनी के पास अधिकार है कि वे किसी भी मैच की कोई भी सौदे (केवल जीतने वाली सौदे) किसी भी समय मैच के किसी भी बिंदु पर रद्द करें अगर कंपनी का विश्वास होता है कि उस विशेष मैच में कोई धोखाधड़ी/गलत कृत्य हो रहा है खिलाड़ियों द्वारा (चाहे वो बैट्समैन/गेंदबाज हों)।</li>
                  </ul>
                  <h2 className="sub-heading" >बुकमेकर नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> किसी भी कारण से किसी भी टीम को फायदा होगा या नुकसान, इसमें हमारी कोई जवाबदारी नहीं है </li>
                    <li><strong>2.</strong> कंपनी के पास किसी भी आईडी/बेटस को हटाने /शून्य करने का अधिकार है, यदि वह अमान्य पाया जाता है। उदाहरण के लिए vpn/robot-use/एक ही IP से एक से अधिक बेटस एक ही समय में एक से अधिक दांव (पंचिंग) और अन्य के मामले में। नोट: केवल जीतने वाली बेट ही रद्द कर दी जाएगी । </li>
                    <li><strong>3.</strong> रिजल्ट या सेशन के बारे में किसी भी प्रश्न के लिए रिजल्ट के 4 दिनों के भीतर संपर्क किया जाना चाहिए, इसे इवेंट के 4 दिनों के बाद मान्य नहीं माना जाएगा।</li>
                    <li><strong>4.</strong> यदि दो टीमों के अंक समान होते हैं, तो रिजल्ट पॉइंट टेबल के आधार पर दिया जाएगा</li>
                    <li><strong>5.</strong> किसी भी स्थिति में अगर वीडियो बाधित/बंद हो जाता है तो किसी तकनीकी समस्या के कारण इसे जारी नहीं रखा जा सकता है बुकमेकर बाजार को रद्द कर दिया जाएगा</li>
                  </ul>
                  <h2 className="sub-heading" >कैसीनो नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong>  यदि किसी कैसिनो गेम में किसी टेक्निकल इशू की वजह से रिजल्ट नहीं डलता है तो क्लाइंट को कॉइन वापिस मिलेंगे</li>
                    <li><strong>2.</strong> ऐसी स्थिति मे कोई वाद विवाद मान्य नहीं होगा</li>
                    <li><strong>3.</strong> अगर कोई क्लाइंट लूडो क्विक टेबल में एंट्री करता है और वह बिना गेम खेले खत्म करे एग्जिट करे तो उसकी राशि नुकसान में मान्य होगी ।</li>
                  </ul>
                  <h2 className="sub-heading" >फैंसी नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> मैच टाई होने पर सभी फैंसी बेटस मान्य होंगे।</li>
                    <li><strong>2.</strong> टॉस या खराब मौसम की स्थिति से पहले सभी एडवांस फैंसीयां ससपेंड कर दी जाएंगी।</li>
                    <li><strong>3.</strong> टेक्निकल एरर या किसी भी परिस्थिति में किसी भी फैंसी को कैंसिल कर दिया जाता है और इवेंट फिर से शुरू नहीं होता है, तो सभी पिछले दांव मान्य होंगे (हार/जीत के आधार पर)।</li>
                    <li><strong>4.</strong> यदि किसी मामले में गलत रेट फैंसी में दी गई है तो उस फैंसी बेटस को रद्द कर दिया जाएगा।</li>
                    <li><strong>5.</strong> किसी भी परिस्थिति में सभी एक्सचेंज में मैनेजमेंट का निर्णय अंतिम होगा। ऑनलाइन पोर्टल में कोई बेमेल होने पर हमारा स्कोरकार्ड मान्य माना जाएगा।</li>
                    <li><strong>6.</strong> यदि ग्राहक गलत तरीके से बेट लगाता है तो हम डिलीट करने के लिए उत्तरदायी नहीं होंगे, कोई बदलाव नहीं किया जाएगा और बेट को कन्फर्म बेट माना जाएगा।</li>
                    <li><strong>7.</strong> किसी टेक्निकल एरर के कारण मार्किट खुला है और रिजल्ट आ गया है, रिजल्ट के बाद भी सभी गलत दांव हटा दिए जाएंगे। इसमें कोई वाद विवाद मान्य नहीं होगा।</li>
                    <li><strong>8.</strong> हमारे एक्सचेंज में मैनुअल बेट्स (फ़ोन कॉल के द्वारा) स्वीकार नहीं किए जाते हैं।</li>
                    <li><strong>9.</strong> हमारा एक्सचेंज हमारे टीवी में 5 सेकंड की देरी प्रदान करेगा।</li>
                    <li><strong>10.</strong> कंपनी के पास किसी भी आईडी/बेट को अमान्य पाए जाने पर ससपेंड/शून्य करने का अधिकार सुरक्षित है। उदाहरण के लिए vpn/robot-use/एक ही IP से कई एंट्री/एक ही समय में कई बेट (पंचिंग) और अन्य के मामले में। नोट: केवल जीतने वाली बेट को रद्द कर दिया जाएगा, उदाहरण के लिए: यदि हमें किसी भी आईडी से ऐसी प्रविष्टियां (ऊपर उल्लिखित) मिलती हैं और उनकी बेट हैं (200000 6 ओवर सेशन में 40 की दर से और 200000 48 की दर से वापस) और वास्तविक स्कोर 38 है, 40 ले की बेट रद्द कर दी जाएगी और 48 बैक की बेट मान्य मानी जाएगी।</li>
                    <li><strong>11.</strong> कंपनी मैच के किसी भी बिंदु पर किसी भी फैंसी के किसी भी बेटस (केवल जीतने वाले दांव) को रद्द करने का अधिकार रखती है यदि कंपनी का मानना &ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;है कि खिलाड़ियों (या तो बल्लेबाज/गेंदबाज) द्वारा उस फैंसी में कोई धोखा/गलत किया जा रहा है।</li>
                    <li><strong>12.</strong> एक बार जब हमारा एक्सचेंज यूजरनेम और पासवर्ड दे देता है तो पासवर्ड बदलने की जिम्मेदारी आपकी होती है।</li>
                    <li><strong>13.</strong> सभी फैंसी में पेनल्टी रन गिने जाएंगे। (यह नियम 20 मार्च 2024 से लागू होगा)</li>
                    <li><strong>14.</strong> किसी भी गलत गतिविधियों का पता चलने पर यूजर आईडी ब्लॉक कर दिया जाएगा, इस संबंध में कोई प्रश्न स्वीकार नहीं किया जाएगा।</li>
                    <li><strong>15.</strong> क्लाइंट आईडी के दुरुपयोग के लिए हमारा एक्सचेंज जिम्मेदार नहीं है।</li>
                    <li><strong>16.</strong> नो बॉल के मामले में, गलत बेटस हटा दिए जाएंगे, तो अंतिम निर्णय मैनेजमेंट का होगा।</li>
                    <li><strong>17.</strong> मैच अबॉण्डेड या खराब मौसम होने पर जो सेशन, पार्टनरशिप और खिलाड़ी रनिंग में है या खिलाड़ी रिटायर हुआ है वो रनिंग सौदे कैंसल नहीं होंगे। और जो सेशन कम्पलीट है उनके हिसाब से कोइन्स कम या ज्यादा होंगे। और रिजल्ट आने पे जो खिलाड़ी जहां है वो वहीं माने जाएंगे।</li>
                  </ul>
                  <h2 className="sub-heading" >टॉस के नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> मैच शुरू होने से 1 घंटे पहले तक दांव स्वीकार किए जाएंगे</li>
                    <li><strong>2.</strong> उदाहरण -  यदि मैच रात 9:30 बजे शुरू होता है तो दांव रात 8:30 बजे तक स्वीकार किए जाएंगे</li>
                    <li><strong>3.</strong> उदाहरण -  यदि कोई मैच शाम 6:30 बजे है और वह 5:30 बजे शुरू होता है तो नियमों के अनुसार मैच शुरू होने से 1 घंटे पहले तक दांव स्वीकार किए जाएंगे।</li>
                  </ul>
                  <h2 className="sub-heading" >टॉस के नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> फैंसी में केवल टोटल बॉलर दुवारा दिए गए रन ही मान्य होंगे। टीम के लेग बाई और बाई बॉलर फैंसी में ऐड नहीं किये जायँगे</li>
                    <li><strong>2.</strong> ओनली ओवर रन फैंसी में टोटल उस ओवर में दिए गए रन मान्य होंगे जिसमे एक्स्ट्रास और बैट्समैन दुवारा बनाये गए रन मन्ये होंगे</li>
                  </ul>
                  <h2 className="sub-heading" >टेस्ट मैच नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> एडवांस सेशन टेस्ट में मान्य है।</li>
                    <li><strong>2.</strong> घोषित पारी या ऑल आउट के कारण अधूरे सेशन रद्द किए जाएंगे और ओवर अगले इनिंग में जोड़े जाएंगे।</li>
                    <li><strong>3.</strong> 132वें ओवर में घोषित पारी या ऑल आउट होने पर केवल 132 ओवर तक की फैंसी मान्य होगी।</li>
                    <li><strong>4.</strong> टेस्ट मैच की दोनों इनिंग में एडवांस फैंसी मान्य हैं।</li>
                    <li><strong>5.</strong> यदि मौसम के कारण मैच रोका गया हो तो सभी लंबी इनिंग/फैंसी रद्द कर दी जाएंगी।</li>
                    <li><strong>6.</strong> टेस्ट में लंबी पारी/इनिंग रन की दोनों एडवांस सेशन फैंसी मान्य हैं।</li>
                    <li><strong>7.</strong> बल्लेबाज के चोटिल होने की स्थिति में उसके आउट न होने पर रन वहीं माने जाएंगे जहाँ तक वह खेला (उदाहरण: 34 रन)।</li>
                    <li><strong>8.</strong> बल्लेबाज 50/100 रन के पास घायल होने पर रिजल्ट उसी स्कोर पर माना जाएगा।</li>
                    <li><strong>9.</strong> “अगला बल्लेबाज आउट” फैंसी में यदि खिलाड़ी घायल हो जाए तो एडवांस फैंसी रद्द कर दी जाएगी।</li>
                    <li><strong>10.</strong> एडवांस फैंसी में वही ओपनिंग बैट्समैन मान्य होगा जो पहले नामित था; यदि बदला गया तो फैंसी रद्द होगी।</li>
                    <li><strong>11.</strong> टेस्ट मैच में दोनों ओपनिंग बल्लेबाज की एडवांस फैंसी मान्य है।</li>
                    <li><strong>12.</strong> पार्टनरशिप में एक बल्लेबाज के घायल होने पर अगला बल्लेबाज आकर पार्टनरशिप को जारी रखता है।</li>
                    <li><strong>13.</strong> मौसम या मैच रद्द होने की स्थिति में पार्टनरशिप का फाइनल स्कोर ही मान्य होगा।</li>
                    <li><strong>14.</strong> दोनों खिलाड़ियों के अलग/समान होने की स्थिति में पार्टनरशिप फैंसी मान्य होगी।</li>
                    <li><strong>15.</strong> टेस्ट मैच में दोनों एडवांस पार्टनरशिप फैंसी मान्य हैं।</li>
                    <li><strong>16.</strong> चार, छक्के, वाइड, विकेट, अतिरिक्त रन, कुल रन, उच्चतम ओवर और टॉप बल्लेबाज तभी मान्य होंगे जब 300 ओवर पूरे हों या मैच किसी टीम द्वारा जीत लिया गया हो।</li>
                    <li><strong>17.</strong> उपरोक्त सभी फैंसी केवल पहली पारी के लिए मान्य होंगी (टीम इवेंट्स पर भी लागू)।</li>
                  </ul>
                  <h2 className="sub-heading" >वनडे नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> पहले ओवर रन एडवांस फैंसी केवल पहली पारी के रन गिने जाएंगे।</li>
                    <li><strong>2.</strong> बारिश या मैच रद्द होने की स्थिति में केवल कम्प्लीट फैंसी मान्य रहेंगी, इन्कम्प्लीट फैंसी हटा दी जाएंगी।</li>
                    <li><strong>3.</strong> पार्टनरशिप, फॉल ऑफ विकेट और रनिंग में खिलाड़ी का अंतिम स्कोर ही फाइनल रिजल्ट माना जाएगा।</li>
                    <li><strong>4.</strong> उदाहरण: टीम A 35 ओवर रन फैंसी में 33 ओवर में ऑलआउट होकर 150 रन बनाती है, तो वही फाइनल रिजल्ट माना जाएगा।</li>
                    <li><strong>5.</strong> एडवांस फैंसी केवल पहली पारी में मान्य है।</li>
                    <li><strong>6.</strong> 50 ओवर पूरे न होने की स्थिति में (मौसम या अन्य कारणों से), सभी बेट रद्द किए जाएंगे।</li>
                    <li><strong>7.</strong> एडवांस 50 ओवर रन फैंसी केवल पहली पारी में मान्य है।</li>
                    <li><strong>8.</strong> बल्लेबाज के चोटिल होने की स्थिति में, जिस स्कोर पर वह मैदान छोड़े, वही फाइनल रन माने जाएंगे (जैसे: 34 रन)।</li>
                    <li><strong>9.</strong> “अगला बल्लेबाज आउट” फैंसी में यदि खिलाड़ी घायल हो जाता है, तो फैंसी को रद्द कर दिया जाएगा।</li>
                    <li><strong>10.</strong> एडवांस फैंसी में वही ओपनिंग बैट्समैन मान्य होंगे जो पहले नामित थे। यदि कोई बदलाव किया जाता है तो फैंसी रद्द होगी।</li>
                    <li><strong>11.</strong> पार्टनरशिप में यदि एक बल्लेबाज घायल हो जाता है, तो अगला बल्लेबाज आकर पार्टनरशिप को जारी रखेगा।</li>
                    <li><strong>12.</strong> दोनों खिलाड़ियों के अलग या समान होने की स्थिति में एडवांस सेशन पार्टनरशिप मान्य मानी जाएगी।</li>
                    <li><strong>13.</strong> दोनों टीमों की एडवांस पार्टनरशिप फैंसी मैच में मान्य है।</li>
                    <li><strong>14.</strong> Extra Sessions: चार, छक्के, वाइड, विकेट, अतिरिक्त रन, कुल रन, उच्चतम ओवर, टॉप बल्लेबाज, मेडन ओवर, कैच आउट, नो बॉल, रन आउट, अर्धशतक और शतक — ये सभी फैंसी केवल तभी मान्य होंगे जब पूरा मैच खेला गया हो। यदि बारिश के कारण ओवर कम कर दिए गए हैं, तो ये सभी फैंसी रद्द कर दी जाएंगी।</li>
                  </ul>
                  <h2 className="sub-heading" >T20 नियम</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> मैच का पहला ओवर रन एडवांस फैंसी केवल पहली पारी के रन गिने जाएंगे।</li>
                    <li><strong>2.</strong> बारिश या मैच रद्द होने की स्थिति में कम्प्लीट फैंसी मान्य है,इन्कम्प्लीट फैंसी हटा दि जाएंगे।।और जो पार्टनरशिप,फॉलऑफ़ विकेट,और खिलाडी रनिंग में है उनका फाइनल रिजल्ट उनके रनो पर ही दिया जायगा"</li>
                    <li><strong>3.</strong> उदाहरण के लिए: - 35 ओवर रन टीम ए किसी भी मामले में खेल रही है, टीम ए 33 ओवर में ऑल-आउट हो गई है, टीम ए ने 150 रन बना लिए हैं, फैंसी फाइनल रिजल्ट उस रन पर मान्य किया जाता है।</li>
                    <li><strong>4.</strong> एडवांस फैंसी  केवल पहली पारी में मान्य है।</li>
                    <li><strong>5.</strong> एडवांस 20 ओवर रन केवल पहली पारी में मान्य है। 20 ओवर का रन मान्य नहीं माना जाएगा यदि 20 ओवर किसी भी स्थिति में पूरा नहीं होता है</li>
                  </ul>
                  <h2 className="sub-heading" >टी20 बल्लेबाज रन</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> बल्लेबाज के चोटिल होने की स्थिति में अगर बल्लेबाज 34 रन पर है तो फाइनल रिजल्ट में 34 रन ही दिए जायँगे ।</li>
                    <li><strong>2.</strong> अगले बैट्समैन आउट फैंसी में अगर खिलाड़ी घायल हो जाता है तो एडवांस फैंसी  को हटा दिया जाएगा।</li>
                    <li><strong>3.</strong> एडवांस में ओपनिंग बैट्समैन ही मान्य है अगर वही बैट्समैन ओपनिंग में आए तो फैंसला मान्य होगा यदि एक बैट्समैन को बदल दिया जाता है तो उस विशेष खिलाड़ी को हटा दिया जाएगा।</li>
                    <li><strong>4.</strong> पार्टनरशिप में एक बल्लेबाज घायल होता है तो अगले बल्लेबाज की पार्टनरशिप जारी रहती है।</li>
                    <li><strong>5.</strong> दोनों खिलाड़ियों के अलग या समान होने की स्थिति में पार्टनरशिप मान्य है।</li>
                    <li><strong>6.</strong> दोनों टीम एडवांस पार्टनरशिप मैच में मान्य हैं।</li>
                    <li><strong>7.</strong> एडवांस SESSION केवल पहली पारी में मान्य है।</li>
                    <li><strong>8.</strong> अगर बारिश या मौसम की स्थिति के कारण ओवर कम हो जाता है या मैच रद्द हो जाता है तो फाइनल रिजल्ट स्कोर के अनुसार दिया जाएगा।</li>
                  </ul>
                  <h2 className="sub-heading" >अतिरिक्त फैंसी</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> टी-20, वन डे और टेस्ट मैच में अगर मौजूदा पारी खिलाड़ी और पार्टनरशिप मैच के बीच में चल रही हो तो उसे रद्द कर दिया जाता है या छोड़ दिया जाता है उस स्थिति में सभी मौजूदा खिलाड़ी और साझेदारी के फाइनल रिजल्ट मान्य होते हैं।</li>
                    <li><strong>2.</strong> चौका, छक्का, वाइड, विकेट, अतिरिक्त रन, कुल रन, उच्चतम ओवर और शीर्ष बल्लेबाज, मेडेन ओवर, कैच आउट, नो बॉल, रन आउट, अर्धशतक और शतक मान्य हैं केवल बारिश के कारण मैच पूरा हो गया है ओवर कम कर दिया गया है अन्य सभी फैंसी हटा दिए जाएंगे।</li>
                    <li><strong>3.</strong> पहली 6 ओवर डॉट बॉल और 20 ओवर डॉट बॉल फैंसी केवल पहली पारी ही मान्य है।</li>
                    <li><strong>4.</strong> किसी भी टीम की गेंदों पर पहला विकेट गंवाने का मतलब है कि किसी भी टीम का पहला विकेट कितनी गेंदों में गिर जाता है, कम से कम न्यूनतम एक गेंद खेली जानी चाहिए अन्यथा बेट हटा दी जाएगी।</li>
                    <li><strong>5.</strong> किसी भी टीम का पहला विकेट FALL दोनों पारियों में मान्य है </li>
                    <li><strong>6.</strong> किसी भी टीम ने 50 रन के लिए कितनी गेंदों का मतलब है कि किसी भी टीम ने 50 रन हासिल किए हैं, उस विशेष गेंद को कितनी गेंदों में कम से कम एक गेंद खेलनी होगी अन्यथा वह फैंसी दांव हटा दिया जाएगा।</li>
                    <li><strong>7.</strong> 50 रन के लिए कितनी गेंदों पर किसी भी टीम को केवल पहली पारी ही मान्य होती है।</li>
                    <li><strong>8.</strong> पहली 6 इनिंग बाउंड्री रन किसी भी टीम के फैन्स की गिनती केवल रन बनाए गए चौकों और छक्कों के हिसाब से की जाएगी, कम से कम 6 ओवर खेले जाने चाहिए अन्यथा वह फ़ैन्सी हटा दी जाएगी।</li>
                    <li><strong>9.</strong> पहली पारी में 6 ओवर की बाउंड्री किसी भी टीम के रन जैसे वाइड, नो-बॉल, लेग-बाय, बाई और ओवर थ्रो के रन इस फैंसी में नहीं गिने जाते हैं।</li>
                    <li><strong>10.</strong> किसी भी बल्लेबाज का सामना कितनी गेंदों से होता है मतलब कि कोई भी बल्लेबाज कितनी गेंदों का खेलता है उस में कम से कम एक गेंद खेलनी होती है अन्यथा वह फैंसी दांव हटा दिया जाएगा।</li>
                    <li><strong>11.</strong> किसी भी बल्लेबाज द्वारा कितनी गेंदों का सामना करना दोनों पारियों में मान्य है।</li>
                    <li><strong>12.</strong> सबसे कम स्कोरिंग ओवर को तभी मान्य माना जाएगा जब ओवर पूरी तरह से पूरा हो गया हो (सभी छह गेंदें फेंकी जानी हैं)</li>
                  </ul>
                  <h2 className="sub-heading" >टेस्ट में कनकशन</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> सेशन अधूरा होने की स्थिति में, एक ओवर सेशन के सभी बेट्स हटा दिए जाएंगे। उदाहरण के लिए पारी की घोषणा या मैच खराब रोशनी या किसी अन्य स्थिति में ससपेंड ।</li>
                    <li><strong>2.</strong> सभी बेट्स को मान्य माना जाएगा यदि किसी खिलाड़ी को कनकशन सब्स्टीट्यूट के तहत बदल दिया गया है, रिजल्ट  उल्लिखित खिलाड़ी द्वारा बनाए गए रनों के लिए दिया जाएगा। उदाहरण के लिए डीएम ब्रावो 23 रन पर रिटायर्ड हर्ट हो जाते हैं, तो रिजल्ट 23 के लिए दिया जाएगा।</li>
                    <li><strong>3.</strong> कनकशन सब्स्टीट्यूट के तहत दोनों खिलाड़ियों के दांव मान्य होंगे।</li>
                  </ul>
                  <h2 className="sub-heading">कुल मैच- इवेंट (टेस्ट)</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong>पूरे टेस्ट मैच में कम से कम 300 ओवर फेंके जाने चाहिए, अन्यथा विशेष इवेंट से संबंधित सभी बेट्स अमान्य हो जाएंगे। उदाहरण के लिए, कैच आउट का टोटल मैच केवल तभी मान्य होगा जब किसी विशेष टेस्ट मैच में 300 ओवर फेंके गए हों</li>
                  </ul>
                  <h2 className="sub-heading">बॉलर विकेट इवेंट्स- टेस्ट</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong>कम से कम एक ओवर (एक पूर्ण ओवर) गेंदबाज द्वारा फेंका जाना चाहिए, अन्यथा उसे मान्य नहीं माना जाएगा</li>
                  </ul>
                  <h2 className="sub-heading">बॉलर ओवर इवेंट्स- टेस्ट</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong>उल्लिखित गेंदबाज को निर्धारित ओवरों की संख्या को पूरा करना होगा, अन्यथा उस विशेष इवेंट से संबंधित दांव शून्य हो जाएंगे। उदाहरण के लिए यदि उल्लिखित गेंदबाज ने 8 ओवर फेंके हैं, तो उस विशेष गेंदबाज के 5 ओवर के रन को मान्य माना जाएगा और 10 ओवर के रन को अमान्य कर दिया जाएगा।</li>
                  </ul>
                  <h2 className="sub-heading">प्लेयर बॉल इवेंट्स- टेस्ट</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> इस इवेंट को तभी मान्य माना जाएगा जब उल्लिखित खिलाड़ी द्वारा बनाए गए रनों की परिभाषित संख्या, अन्यथा रिजल्ट 0 (शून्य) गेंदों के रूप में माना जाएगा।</li>
                    <li><strong>2.</strong> उदाहरण के लिए यदि रूट 60 गेंदों में 20 रन बनाता है और 22 रन पर आउट हो जाता है, तो 20 रन का रिजल्ट 60 गेंदों का होगा और 25 रन के लिए आवश्यक गेंदों का रिजल्ट 0 (शून्य) माना जाएगा और वही दिया जाएगा नतीजा</li>
                  </ul>
                  <h2 className="sub-heading">सीमित ओवर इवेंट-टेस्ट</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> इस इवेंट को केवल तभी मान्य माना जाएगा जब विशेष इवेंट पर परिभाषित ओवरों की संख्या फेंकी गई हो, अन्यथा इस इवेंट से संबंधित सभी दांव शून्य हो जाएंगे। 0-50 ओवर की घटनाएँ केवल 50 ओवर पूरे होने पर ही मान्य होंगी, यदि पहले बल्लेबाजी करने वाली टीम 50 ओवर से पहले ऑल आउट हो जाती है तो शेष ओवर की गणना दूसरी पारी से की जाएगी। उदाहरण के लिए यदि पहले बल्लेबाजी करने वाली टीम 35 ओवरों में ऑल आउट हो जाती है तो शेष 15 ओवर दूसरी पारी से गिने जाएंगे, यदि टीम निर्धारित ओवरों की संख्या से पहले ऑल आउट हो जाती है तो यह सभी घटनाओं पर लागू होता है।</li>
                    <li><strong>2.</strong> यदि मैच में किसी भी स्थिति में ओवर कम हो जाता है, तो अधूरी रहने वाली इवेंट को रद्द कर दिया जाएगा, उदाहरण के लिए यदि बारिश / खराब रोशनी के कारण 15 ओवरों में मैच बाधित हो जाता है और इस ओवर को कम कर दिया जाता है। 0-10 के लिए इवेंट मान्य होंगे, इस प्रकार से संबंधित अन्य सभी इवेंट हटा दिए जाएंगे।</li>
                    <li><strong>3.</strong> यह ईवेंट तभी मान्य होगा जब ओवर की परिभाषित संख्या पूरी हो गई हो। उदाहरण के लिए पहले बल्लेबाजी करने वाली टीम 29.4 ओवर में ऑल आउट हो जाती है तो उसे 30 ओवर माना जाएगा, बाद में बल्लेबाजी करने वाली टीम को 20 ओवर पूरे करने होंगे तभी 0-50 ओवर को मान्य माना जाएगा। यदि दूसरी बल्लेबाजी करने वाली टीम 19.4 ओवर में ऑल आउट हो जाती है तो 0-50 ओवर की इवेंट को मान्य नहीं माना जाएगा, यह केवल पहली पारी के लिए मान्य है।</li>
                  </ul>
                  <h2 className="sub-heading">बॉलर इवेंट- ODI</h2>
                  <ul className="list">
                    <li><strong>1.</strong> उल्लिखित गेंदबाज को निर्धारित ओवरों की संख्या को पूरा करना होगा, अन्यथा उस विशेष इवेंट से संबंधित दांव शून्य हो जाएंगे। उदाहरण के लिए यदि उल्लिखित गेंदबाज ने 8 ओवर फेंके हैं, तो उस विशेष गेंदबाज के 5 ओवर के रन को मान्य माना जाएगा और 10 ओवर के रन को अमान्य कर दिया जाएगा।</li>
                    <li><strong>2.</strong> दोनों पारियां मान्य हैं</li>
                  </ul>
                  <h2 className="sub-heading">अन्य इवेंट - टी20</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> 1-10 ओवर और 11-20 ओवर की इवेंट को तभी मान्य माना जाएगा जब उल्लिखित ओवर की संख्या पूरी तरह से खेली गई हो। हालाँकि यदि किसी विशेष इवेंट से पहले ओवर कम हो जाता है तो वह अमान्य हो जाएगा, यदि पहले बल्लेबाजी करने वाली टीम 20 ओवर से पहले ऑल आउट हो जाती है तो शेष ओवर की गणना दूसरी पारी से की जाएगी। उदाहरण के लिए यदि पहले बल्लेबाजी करने वाली टीम 17 ओवर में ऑल आउट हो जाती है तो शेष 3 ओवर दूसरी पारी से गिने जाएंगे और सभी घटनाओं के 3 ओवर गिने जाएंगे। यह केवल पहली पारी के लिए मान्य है।</li>
                    <li><strong>2.</strong> यदि किसी रनिंग इवेंट के बीच ओवर कम हो जाता है, तो उसे मान्य माना जाएगा और बाकी को रद्द कर दिया जाएगा। उदाहरण के लिए.., मैच शुरू हुआ और बारिश/खराब रोशनी या किसी अन्य स्थिति के कारण मैच 4 ओवर में बाधित हो गया और बाद में ओवर कम हो गया। फिर 1-10 के लिए इवेंट मान्य हैं बाकी सभी रद्द कर दिए जाएंगे</li>
                    <li><strong>3.</strong> बॉलर सेशन: बॉलर सेशन एडवांस इवेंट केवल पहली इनिंग के लिए मान्य। यह इवेंट तभी मान्य होती है जब गेंदबाज ने अपने ओवरों का अधिकतम कोटा पूरा कर लिया हो, अन्यथा उसे रद्द कर दिया जाएगा। हालाँकि यदि मैच का रिजल्ट आ गया है और उस गेंदबाज ने पहले ही अपना अंतिम ओवर फेंकना शुरू कर दिया है तो रिजल्ट दिया जाएगा भले ही उसने ओवर पूरा नहीं किया हो। उदाहरण के लिए बी कुमार अपना अंतिम ओवर फेंक रहे हैं और 3.4 पर मैच का रिजल्ट आया है तो रिजल्ट बी कुमार के ओवर रन के लिए दिया जाएगा</li>
                    <li><strong>4.</strong> डीएलएस के मामले में, ओवर कम हो गया तो जिस गेंदबाज ने पहले से ही उस रिजल्ट का अपना अधिकतम कोटा डाला है, उसे मान्य माना जाएगा और बाकी को रद्द कर दिया जाएगा।</li>
                  </ul>
                  <h2 className="sub-heading">डॉट बॉल इवेंट</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> केवल कोई रन नहीं होने पर डॉट बॉल मानी जाएगी।</li>
                    <li><strong>2.</strong> अगर विकेट का मतलब है कि डॉट बॉल गिना जाएगा।</li>
                    <li><strong>3.</strong> फ्री हिट पर बाउंड्री हिट को ही मान्य माना जाएगा</li>
                    <li><strong>4.</strong> उल्लिखित मैच में कोई फ्री हिट नहीं होने पर बेट्स को हटा दिया जाएगा</li>
                    <li><strong>5.</strong> बल्ले से बाउंड्री मान्य मानी जाएगी</li>
                    <li><strong>6.</strong> चार और छह दोनों मान्य हैं</li>
                    <li><strong>7.</strong> बल्लेबाज की बैट बाउंड्री को ही मान्य  माना जाता है</li>
                    <li><strong>8.</strong> फ्री हिट सीमाएं भी मान्य हैं</li>
                    <li><strong>9.</strong> यदि उस  गेंद को पूरा नहीं किया जाता है तो बेट्स को रद्द कर दिया जाएगा</li>
                    <li><strong>10.</strong> रिजल्ट  0 या 4 (नहीं या हां) दिया जाएगा। उदाहरण के लिए बल्लेबाज  गेंद पर चौका मारने का मतलब रिजल्ट 0 है अन्यथा रिजल्ट 4 है।</li>
                    <li><strong>11.</strong> बिग बैश में पावर सर्ज नियम</li>
                    <li><strong>12.</strong> पावर प्ले पहले चार ओवर + पावर सर्ज दो ओवर-बल्लेबाज पसंद</li>
                    <li><strong>13.</strong> बल्लेबाजी पक्ष चुनता है कि पावर सर्ज के साथ कब करना है।</li>
                    <li><strong>14.</strong> पारी की शुरुआत में अभी भी चार ओवर का पावर प्ले है, लेकिन अब बल्लेबाजी करने वाली टीम 11वें ओवर के बाद से किसी भी समय अन्य दो पावर सर्ज ओवर ले सकती है।</li>
                    <li><strong>15.</strong> रिजल्ट या दर के बारे में किसी भी प्रश्न के लिए इवेंट से 4 दिनों के भीतर संपर्क करना होगा, इवेंट से 4 दिनों के बाद को मान्य नहीं माना जाएगा</li>
                    <li><strong>16.</strong> बल्लेबाजी पक्ष चुनता है कि पावर सर्ज के साथ कब करना है।</li>
                  </ul>
                  <h2 className="sub-heading">अन्य</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong>यदि किसी सेशन के परिणाम में कोई त्रुटि (जैसे कि गलत ऑड्स, तकनीकी समस्या, या गलत रिपोर्ट किया गया परिणाम) पाई जाती है, तो कंपनी उस सेशन से जुड़ी शर्तों (बेट्स) को मैच समाप्त होने के बाद भी रद्द, संशोधित या हटाने का अधिकार रखती है।</li>
                  </ul>
                  <hr className="divider" />
                  <p className="rule-note">नोट: यदि एजेंट ने इन शर्तों को पहले ही अपने ग्राहक को बता दिया है, तो बाद में किसी भी प्रकार का तर्क या विवाद स्वीकार नहीं किया जाएगा।</p>
                </div>
              </div>
            )}

            {/* Conditionally render English content */}
            {activeTab === "english" && (
              <div id="english">
                <h2 className="heading">Game Rules & Terms</h2>
                <div className="content">
                  <p className="rule-alert-message"><AlertIcon />Please take a few minutes here to understand the rules, and understand accordingly.</p>
                  <div className="rule-note-line">
                    <span>NOTE: THE GROUND COMMENTARY BET WILL BE REMOVED WITHOUT PROVIDING ANY NOTIFICATION OR EXPLANATION.</span>
                  </div>
                  <div className="rule-empty-box">
                    <div className="rule-empty-icon">
                      <span />
                      <span />
                    </div>
                    <div className="rule-empty-text">NO DATA</div>
                  </div>
                  <h2 className="sub-heading" >Fancy Rules</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> If the match is tied, all fancy bets will be valid.</li>
                    <li><strong>2.</strong> All advance fancies will be suspended before the toss or in case of bad weather conditions.</li>
                    <li><strong>3.</strong> If a technical error or any circumstance causes any fancy to be canceled and the event is not resumed, then all prior bets will be valid (based on win/loss).</li>
                    <li><strong>4.</strong> If in any case an incorrect rate is given in a fancy, that fancy bet will be canceled.</li>
                    <li><strong>5.</strong> In any circumstance, management's decision across all exchanges shall be final. In case of any mismatch in the online portal, our scoreboard shall be considered valid.</li>
                    <li><strong>6.</strong> If the client places a bet incorrectly, we will not be liable to delete it; no changes will be made and the bet will be considered confirmed.</li>
                    <li><strong>7.</strong> If due to a technical error, the market remains open and a result comes, then after the result all incorrect bets will be removed. No dispute will be accepted.</li>
                    <li><strong>8.</strong> Manual bets (via phone call) are not accepted in our exchange.</li>
                    <li><strong>9.</strong> Our exchange will provide a 5-second delay on our TV broadcast.</li>
                    <li><strong>10.</strong> The company reserves the right to suspend/nullify any ID/bet found invalid. For example: VPN/robot-use / multiple entries from the same IP / multiple betting at the same time, etc. Note: only winning bets will be canceled. For example, if we find entries from any ID (as above) and there are bets (200000 Lay in 6-over session at rate 40 and 200000 Back at rate 48) and the actual score is 38, then the Lay bet at 40 will be canceled and the Back bet at 48 will be considered valid.</li>
                    <li><strong>11.</strong> The company holds the right at any point in the match to cancel any fancy bet (only winning bets) if it believes a player (batsman / bowler) is cheating / acting improperly in that fancy.</li>
                    <li><strong>12.</strong> Once our exchange gives a username and password, changing the password is your responsibility.</li>
                    <li><strong>13.</strong> Penalty runs will be counted in all fancy. ( This rule applicable from 20th March 2024 )</li>
                    <li><strong>14.</strong> If any unfair activity is detected, the user ID will be blocked; no queries will be accepted in this regard.</li>
                    <li><strong>15.</strong> Our exchange is not responsible for misuse of client IDs.</li>
                    <li><strong>16.</strong> In case of a no-ball, incorrect bets will be removed; final decision rests with management.</li>
                    <li><strong>17.</strong> If the match is abandoned or due to bad weather, any sessions, partnerships, or players in running bets or retired will not have their running bets canceled. Sessions that are complete will have coins awarded or deducted accordingly. On result being declared, the players' current positions will be considered final.</li>
                  </ul>
                  <h2 className="sub-heading">Bowler Run Fancy</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> In fancy, only the total runs given by the bowler will be considered valid. Team leg-byes and byes will not be added to bowler fancy.</li>
                    <li><strong>2.</strong> In only-over run fancy, the total runs given in that over (including extras and batsman runs) will be valid.</li>
                  </ul>

                  <h2 className="sub-heading">Test Match Rules</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> Advance sessions are valid in Test matches.</li>
                    <li><strong>2.</strong> If a session is incomplete due to a declaration or all-out, the remaining overs will be added to the next innings.</li>
                    <li><strong>3.</strong> If a declaration or all-out occurs in the 132nd over, only up to 132 overs will be considered for fancy.</li>
                    <li><strong>4.</strong> Advance fancy is valid in both innings of a Test match.</li>
                    <li><strong>5.</strong> If due to weather the match is halted, all long-innings fancies will be canceled.</li>
                    <li><strong>6.</strong> In Test, long innings / inning run advance session fancies are valid in both innings.</li>
                    <li><strong>7.</strong> If a batsman is injured and is not out, the runs scored till then will be considered (e.g. 34 runs).</li>
                    <li><strong>8.</strong> If a batsman is injured near 50/100 runs, the result will be based on the score at that point.</li>
                    <li><strong>9.</strong> In "next batsman out" fancy, if the player is injured, the advance fancy will be canceled.</li>
                    <li><strong>10.</strong> Only the originally designated opening batsman in advance fancy will be valid; if changed, the fancy will be canceled.</li>
                    <li><strong>11.</strong> In Test matches, advance fancy for both opening batsmen is valid.</li>
                    <li><strong>12.</strong> In a partnership, if one batsman gets injured, the next batsman continues the partnership.</li>
                    <li><strong>13.</strong> In weather or match cancellation, the final partnership score will be considered valid.</li>
                    <li><strong>14.</strong> Whether the two players are the same or different, partnership fancy is valid.</li>
                    <li><strong>15.</strong> In Test matches, advance partnership fancies are valid for both teams.</li>
                    <li><strong>16.</strong> Four, six, wide, wicket, extra run, total run, highest over, and top batsman will be valid only if 300 overs are completed or a team wins the match.</li>
                    <li><strong>17.</strong> All the above fancies will be valid only for the first innings (also applicable to team events).</li>
                  </ul>

                  <h2 className="sub-heading">One-Day Rules</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> The first over run advance fancy will only count runs from the first innings.</li>
                    <li><strong>2.</strong> In case of rain or match cancellation, only complete fancies will be valid; incomplete fancies will be void.</li>
                    <li><strong>3.</strong> Partnership, fall of wicket, and running batsman's final score will be the result.</li>
                    <li><strong>4.</strong> Example: Team A in a 35-over run fancy, if the team is all out in 33 overs for 150 runs, that score will be the final result.</li>
                    <li><strong>5.</strong> Advance fancies are valid only in the first innings.</li>
                    <li><strong>6.</strong> If the full 50 overs are not completed (due to weather or any reason), all bets will be void.</li>
                    <li><strong>7.</strong> Advance 50-over run fancies are valid only in the first innings.</li>
                    <li><strong>8.</strong> If a batsman is injured, the score at which he left will be the final result (e.g. 34 runs).</li>
                    <li><strong>9.</strong> In "next batsman out" fancy, if the player is injured, the fancy will be canceled.</li>
                    <li><strong>10.</strong> In advance fancy, only the opening batsman originally named is valid; if changed, the fancy is canceled.</li>
                    <li><strong>11.</strong> If one batsman gets injured, the next batsman continues the partnership.</li>
                    <li><strong>12.</strong> Whether the two batsmen are same or different, partnership fancy is valid.</li>
                    <li><strong>13.</strong> Advance partnership fancies for both teams in the match are valid.</li>
                    <li><strong>14.</strong> Extra sessions: Four, six, wide, wicket, extra runs, total run, highest over, top batsman, maiden over, catch out, no-ball, run out, fifty, and century are valid only if the match is fully played. If overs are reduced due to rain, these fancies will be void.</li>
                  </ul>

                  <h2 className="sub-heading">T20 Rules</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> First over run advance fancy will count only the runs from the first innings.</li>
                    <li><strong>2.</strong> In case of rain or match cancellation, only complete fancies remain valid; incomplete fancies will be void. Partnership, fall-of-wicket, and players in running bets will have results based on their runs.</li>
                    <li><strong>3.</strong> Example: Team A's 35-over run fancy—if Team A is all out in 33 overs for 150 runs, that will be the final result.</li>
                    <li><strong>4.</strong> Advance fancies are valid only in the first innings.</li>
                    <li><strong>5.</strong> Advance 20-over run fancy is valid only in the first innings; if 20 overs are not completed under any condition, this fancy will not be valid.</li>
                  </ul>

                  <h2 className="sub-heading">T20 Batsman Runs</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> If a batsman is injured on 34 runs, then in final result it will be considered as 34 runs.</li>
                    <li><strong>2.</strong> In "next batsman out" fancy, if the player is injured, the advance fancy will be canceled.</li>
                    <li><strong>3.</strong> Only the original opening batsman is valid in advance; if changed, that particular player's fancy is removed.</li>
                    <li><strong>4.</strong> In partnership, if one batsman is injured, the next batsman continues the partnership.</li>
                    <li><strong>5.</strong> Whether the two players are same or different, the partnership is valid.</li>
                    <li><strong>6.</strong> Advance partnership for both teams is valid in the match.</li>
                    <li><strong>7.</strong> Advance session is valid only in the first innings.</li>
                    <li><strong>8.</strong> If overs are reduced or the match is canceled due to weather, the final result will be based on the score.</li>
                  </ul>

                  <h2 className="sub-heading">Extra Fancy</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> In T20, ODI, and Test matches, if a player or partnership in the current innings is in progress, their final result will be considered valid and the fancy will not be canceled or removed.</li>
                    <li><strong>2.</strong> Four, six, wide, wicket, extra run, total run, highest over, top batsman, maiden over, catch out, no-ball, run out, fifty, and century are valid only if the match was completed fully. If overs were reduced due to rain, all such fancies will be removed.</li>
                    <li><strong>3.</strong> First 6 over dot ball and 20 over dot ball fancies are valid only in the first innings.</li>
                    <li><strong>4.</strong> First wicket on any team means in how many balls the first wicket falls; at least one ball must be faced, else the bet will be removed.</li>
                    <li><strong>5.</strong> First wicket fall fancy is valid in both innings.</li>
                    <li><strong>6.</strong> How many balls a team took to make 50 runs—if none or fewer balls are faced, the fancy is removed.</li>
                    <li><strong>7.</strong> Ball-count for 50 runs fancy is valid only in first innings.</li>
                    <li><strong>8.</strong> First 6 innings boundary runs fancy for any team counts only boundaries (fours and sixes); at least 6 overs must be played else that fancy is void.</li>
                    <li><strong>9.</strong> In the first innings, boundary runs in those 6 overs from wide, no-ball, leg-bye, bye, over-throw are not counted.</li>
                    <li><strong>10.</strong> How many balls a batsman faces—if none, the fancy bet is void.</li>
                    <li><strong>11.</strong> Balls faced by a batsman is valid in both innings.</li>
                    <li><strong>12.</strong> Lowest scoring over is valid only if the over is fully completed (all 6 balls).</li>
                  </ul>

                  <h2 className="sub-heading">Concussion in Test Matches</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> If a session is incomplete, all bets from that over session will be void. For example, due to declaration or match suspension caused by bad light or any other condition.</li>
                    <li><strong>2.</strong> All bets will be considered valid if a player is replaced under the concussion substitute rule. The result will be based on the runs scored by the originally mentioned player. For example, if D.M. Bravo retires hurt at 23 runs, the result will be settled for 23 runs.</li>
                    <li><strong>3.</strong> Bets for both players under the concussion substitute will be considered valid.</li>
                  </ul>

                  <h2 className="sub-heading">Total Match Events (Test)</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> At least 300 overs must be bowled in the entire Test match; otherwise, all bets related to special events will be void. For example, the total match catch-out bet will only be valid if 300 overs have been bowled in the match.</li>
                  </ul>

                  <h2 className="sub-heading">Bowler Wicket Events - Test</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> At least one over (a complete over) must be bowled by the bowler; otherwise, it will not be considered valid.</li>
                  </ul>

                  <h2 className="sub-heading">Bowler Over Events - Test</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> The mentioned bowler must complete the specified number of overs; otherwise, all bets related to that particular event will be void. For example, if the mentioned bowler has bowled 8 overs, the event for 5 overs runs will be valid, but the one for 10 overs will be void.</li>
                  </ul>

                  <h2 className="sub-heading">Player Ball Events - Test</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> This event will only be valid if the defined number of runs is scored by the mentioned player; otherwise, the result will be considered as 0 balls.</li>
                    <li><strong>2.</strong> For example, if Root scores 20 runs in 60 balls and gets out on 22 runs, then the result for 20 runs will be on 60 balls, and for 25 runs, it will be considered as 0 balls and result will be based on that.</li>
                  </ul>

                  <h2 className="sub-heading">Limited Over Events - Test</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> This event will only be valid if the defined number of overs in the event is bowled. Otherwise, all related bets will be void. 0-50 over events are valid only if 50 overs are completed. If the first batting team gets all out before 50 overs, the remaining overs will be counted from the second innings. For example, if the first batting team gets all out in 35 overs, the remaining 15 overs will be counted from the second innings. This applies to all such events.</li>
                    <li><strong>2.</strong> If overs are reduced at any point in the match, the incomplete events will be void. For example, if the match is interrupted in 15 overs due to rain or bad light and overs are reduced, then only 0-10 events will be valid, and the rest will be removed.</li>
                    <li><strong>3.</strong> The event is valid only when the defined number of overs is completed. For example, if the first batting team gets all out in 29.4 overs, it will be considered 30 overs. The second batting team must complete 20 overs for the 0-50 over event to be valid. If the second team gets all out in 19.4 overs, the event will be void. This applies only to the first innings.</li>
                  </ul>

                  <h2 className="sub-heading">Bowler Events - ODI</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> The mentioned bowler must complete the defined number of overs; otherwise, all bets related to that particular event will be void. For example, if the mentioned bowler has bowled 8 overs, the 5-over run bet will be valid, and the 10-over run bet will be void.</li>
                    <li><strong>2.</strong> Both innings are valid.</li>
                  </ul>

                  <h2 className="sub-heading">Other Events - T20</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> 1-10 overs and 11-20 overs events will only be valid if the specified number of overs are fully played. However, if overs are reduced before the specific event, it will be void. If the first batting team gets all out before 20 overs, the remaining overs will be counted from the second innings. For example, if the first team is all out in 17 overs, the remaining 3 overs will be counted from the second innings, and all event overs will include these 3 overs. This is valid only for the first innings.</li>
                    <li><strong>2.</strong> If overs are reduced during a running event, it will be considered valid and the rest will be void. For example, the match started, and due to rain/bad light or any other reason, it was interrupted in 4 overs and later overs were reduced. Then 1-10 event will be valid and others will be void.</li>
                    <li><strong>3.</strong> Bowler session: Bowler session advance events are valid only for the first innings. This event is only valid if the bowler has completed his maximum quota of overs; otherwise, it will be void. However, if the match result is out and the bowler had started his final over, then the result will be declared even if the over is not completed. For example, if B Kumar is bowling his final over and the match result is out at 3.4, then the result will be declared for his over's runs.</li>
                    <li><strong>4.</strong> In case of DLS, if overs are reduced, the bowler who has already completed his maximum quota for that result will be considered valid, and the rest will be void.</li>
                  </ul>

                  <h2 className="sub-heading">Dot Ball Event</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> Only when no run is scored, it will be considered a dot ball.</li>
                    <li><strong>2.</strong> If a wicket falls, it is considered a dot ball.</li>
                    <li><strong>3.</strong> Only boundary hit on a free hit is considered valid.</li>
                    <li><strong>4.</strong> If there is no free hit in the mentioned match, bets will be removed.</li>
                    <li><strong>5.</strong> Bat boundary is considered valid.</li>
                    <li><strong>6.</strong> Both four and six are valid.</li>
                    <li><strong>7.</strong> Only bat boundary from the batsman is considered valid.</li>
                    <li><strong>8.</strong> Free hit boundaries are also valid.</li>
                    <li><strong>9.</strong> If that ball is not completed, bets will be void.</li>
                    <li><strong>10.</strong> The result will be given as 0 or 4 (No or Yes). For example, if the batsman does not hit a four on the ball, the result is 0; otherwise, it's 4.</li>
                    <li><strong>11.</strong> Power Surge rule in Big Bash.</li>
                    <li><strong>12.</strong> Powerplay is the first four overs + Power Surge two overs - batsman's choice.</li>
                    <li><strong>13.</strong> Batting side decides when to take Power Surge.</li>
                    <li><strong>14.</strong> Still four-over powerplay at the start of the innings, but now the batting team can take the additional two Power Surge overs anytime after the 11th over.</li>
                    <li><strong>15.</strong> For any question regarding result or rate, you must contact within 4 days of the event; queries after 4 days will not be considered.</li>
                    <li><strong>16.</strong> Batting side decides when to take Power Surge.</li>
                  </ul>

                  <h2 className="sub-heading">Extra</h2>
                  <ul className="rule-list">
                    <li><strong>1.</strong> If any error is found in the result of a session (such as wrong odds, technical error, or incorrect result reporting), the company reserves the right to cancel, modify or remove the bets related to that session even after the match is over.</li>
                  </ul>
                  <hr className="divider" />
                  <p className="rule-note">Note: If the Agent has already informed these conditions to its Client, no argument or dispute of any kind will be entertained later.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <div className="main_menu_btn">
          <a className="btn rules-btn" id="create_bets" href="/main/dashboard">
            MAIN MENU
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Rule;
