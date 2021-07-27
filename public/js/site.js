(()=>{var e,t={670:(e,t,a)=>{var n,i,r="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},s=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=r.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){switch(t.util.type(e)){case"Object":var a={};for(var n in e)e.hasOwnProperty(n)&&(a[n]=t.util.clone(e[n]));return a;case"Array":return e.map&&e.map((function(e){return t.util.clone(e)}))}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var i in a)n[i]=a[i];return n},insertBefore:function(e,a,n,i){var r=(i=i||t.languages)[e];if(2==arguments.length){for(var s in n=arguments[1])n.hasOwnProperty(s)&&(r[s]=n[s]);return r}var o={};for(var l in r)if(r.hasOwnProperty(l)){if(l==a)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);o[l]=r[l]}return t.languages.DFS(t.languages,(function(t,a){a===i[e]&&t!=e&&(this[t]=o)})),i[e]=o},DFS:function(e,a,n){for(var i in e)e.hasOwnProperty(i)&&(a.call(e,i,e[i],n||i),"Object"===t.util.type(e[i])?t.languages.DFS(e[i],a):"Array"===t.util.type(e[i])&&t.languages.DFS(e[i],a,i))}},plugins:{},highlightAll:function(e,a){for(var n,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;n=i[r++];)t.highlightElement(n,!0===e,a)},highlightElement:function(a,n,i){for(var s,o,l=a;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1],o=t.languages[s]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var p=a.textContent,d={element:a,language:s,grammar:o,code:p};if(p&&o)if(t.hooks.run("before-highlight",d),n&&r.Worker){var u=new Worker(t.filename);u.onmessage=function(e){d.highlightedCode=e.data,t.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(d.element),t.hooks.run("after-highlight",d),t.hooks.run("complete",d)},u.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else d.highlightedCode=t.highlight(d.code,d.grammar,d.language),t.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",d),t.hooks.run("complete",d);else t.hooks.run("complete",d)},highlight:function(e,n,i){var r=t.tokenize(e,n);return a.stringify(t.util.encode(r),i)},tokenize:function(e,a){var n=t.Token,i=[e],r=a.rest;if(r){for(var s in r)a[s]=r[s];delete a.rest}e:for(var s in a)if(a.hasOwnProperty(s)&&a[s]){var o=a[s];o="Array"===t.util.type(o)?o:[o];for(var l=0;l<o.length;++l){var p=o[l],d=p.inside,u=!!p.lookbehind,c=0,g=p.alias;p=p.pattern||p;for(var h=0;h<i.length;h++){var m=i[h];if(i.length>e.length)break e;if(!(m instanceof n))if(p.lastIndex=0,f=p.exec(m)){u&&(c=f[1].length);var f,b=f.index-1+c,k=b+(f=f[0].slice(c)).length,S=m.slice(0,b+1),w=m.slice(k+1),v=[h,1];S&&v.push(S);var y=new n(s,d?t.tokenize(f,d):f,g);v.push(y),w&&v.push(w),Array.prototype.splice.apply(i,v)}}}}return i},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(a)}}},a=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(a.stringify=function(e,n,i){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map((function(t){return a.stringify(t,n,e)})).join("");var r={type:e.type,content:a.stringify(e.content,n,i),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}t.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=(o?" ":"")+l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+o+">"+r.content+"</"+r.tag+">"},!r.document)return r.addEventListener?(r.addEventListener("message",(function(e){var a=JSON.parse(e.data),n=a.language,i=a.code,s=a.immediateClose;r.postMessage(t.highlight(i,t.languages[n],n)),s&&r.close()}),!1),r.Prism):r.Prism;var n=document.getElementsByTagName("script");return(n=n[n.length-1])&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),r.Prism}();e.exports&&(e.exports=s),void 0!==a.g&&(a.g.Prism=s),s.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},s.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),s.languages.xml=s.languages.markup,s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.output=s.languages.markup,s.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},s.languages.css.atrule.inside.rest=s.util.clone(s.languages.css),s.languages.markup&&(s.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:s.languages.css,alias:"language-css"}}),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:s.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},s.languages.markup.tag)),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),s.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),s.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}}}),s.languages.markup&&s.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:s.languages.javascript,alias:"language-javascript"}}),s.languages.js=s.languages.javascript,s.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},s.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m},i=/\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g,(n=s).languages.handlebars=n.languages.extend("markup",{handlebars:{pattern:i,inside:{delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(\\?.)*?\1/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/,boolean:/\b(true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\w\W]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/}}}),n.languages.insertBefore("handlebars","tag",{"handlebars-comment":{pattern:/\{\{![\w\W]*?\}\}/,alias:["handlebars","comment"]}}),n.hooks.add("before-highlight",(function(e){"handlebars"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(i,(function(t){return e.tokenStack.push(t),"___HANDLEBARS"+e.tokenStack.length+"___"})))})),n.hooks.add("before-insert",(function(e){"handlebars"===e.language&&(e.code=e.backupCode,delete e.backupCode)})),n.hooks.add("after-highlight",(function(e){if("handlebars"===e.language){for(var t,a=0;t=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("___HANDLEBARS"+(a+1)+"___",n.highlight(t,e.grammar,"handlebars").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}})),s.languages.markdown=s.languages.extend("markup",{}),s.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),s.languages.markdown.bold.inside.url=s.util.clone(s.languages.markdown.url),s.languages.markdown.italic.inside.url=s.util.clone(s.languages.markdown.url),s.languages.markdown.bold.inside.italic=s.util.clone(s.languages.markdown.italic),s.languages.markdown.italic.inside.bold=s.util.clone(s.languages.markdown.bold),s.languages.php=s.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),s.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),s.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),s.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),s.languages.markup&&(s.hooks.add("before-highlight",(function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,(function(t){return e.tokenStack.push(t),"{{{PHP"+e.tokenStack.length+"}}}"})))})),s.hooks.add("before-insert",(function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)})),s.hooks.add("after-highlight",(function(e){if("php"===e.language){for(var t,a=0;t=e.tokenStack[a];a++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(a+1)+"}}}",s.highlight(t,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}})),s.hooks.add("wrap",(function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))})),s.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:s.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),s.languages.insertBefore("php","variable",{this:/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/(static|self|parent)/,punctuation:/(::|\\)/}}}),function(e){var t="(?:\\([^|)]+\\)|\\[[^\\]]+\\]|\\{[^}]+\\})+",a={css:{pattern:/\{[^}]+\}/,inside:{rest:e.languages.css}},"class-id":{pattern:/(\()[^)]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/};e.languages.textile=e.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:RegExp("^[a-z]\\w*(?:"+t+"|[<>=()])*\\."),inside:{modifier:{pattern:RegExp("(^[a-z]\\w*)(?:"+t+"|[<>=()])+(?=\\.)"),lookbehind:!0,inside:e.util.clone(a)},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:RegExp("^[*#]+(?:"+t+")?\\s+.+","m"),inside:{modifier:{pattern:RegExp("(^[*#]+)"+t),lookbehind:!0,inside:e.util.clone(a)},punctuation:/^[*#]+/}},table:{pattern:RegExp("^(?:(?:"+t+"|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:"+t+"|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|","m"),inside:{modifier:{pattern:RegExp("(^|\\|(?:\\r?\\n|\\r)?)(?:"+t+"|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"),lookbehind:!0,inside:e.util.clone(a)},punctuation:/\||^\./}},inline:{pattern:RegExp("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:"+t+")?.+?\\1"),inside:{bold:{pattern:RegExp("((^\\*\\*?)(?:"+t+")?).+?(?=\\2)"),lookbehind:!0},italic:{pattern:RegExp("((^__?)(?:"+t+")?).+?(?=\\2)"),lookbehind:!0},cite:{pattern:RegExp("(^\\?\\?(?:"+t+")?).+?(?=\\?\\?)"),lookbehind:!0,alias:"string"},code:{pattern:RegExp("(^@(?:"+t+")?).+?(?=@)"),lookbehind:!0,alias:"keyword"},inserted:{pattern:RegExp("(^\\+(?:"+t+")?).+?(?=\\+)"),lookbehind:!0},deleted:{pattern:RegExp("(^-(?:"+t+")?).+?(?=-)"),lookbehind:!0},span:{pattern:RegExp("(^%(?:"+t+")?).+?(?=%)"),lookbehind:!0},modifier:{pattern:RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])"+t),lookbehind:!0,inside:e.util.clone(a)},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:RegExp('"(?:'+t+')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),inside:{text:{pattern:RegExp('(^"(?:'+t+')?)[^"]+(?=")'),lookbehind:!0},modifier:{pattern:RegExp('(^")'+t),lookbehind:!0,inside:e.util.clone(a)},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:RegExp("!(?:"+t+"|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),inside:{source:{pattern:RegExp("(^!(?:"+t+"|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),lookbehind:!0,alias:"url"},modifier:{pattern:RegExp("(^!)(?:"+t+"|[<>=()])+"),lookbehind:!0,inside:e.util.clone(a)},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^)]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((TM|R|C)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}});var n={inline:e.util.clone(e.languages.textile.phrase.inside.inline),link:e.util.clone(e.languages.textile.phrase.inside.link),image:e.util.clone(e.languages.textile.phrase.inside.image),footnote:e.util.clone(e.languages.textile.phrase.inside.footnote),acronym:e.util.clone(e.languages.textile.phrase.inside.acronym),mark:e.util.clone(e.languages.textile.phrase.inside.mark)};e.languages.textile.phrase.inside.inline.inside.bold.inside=n,e.languages.textile.phrase.inside.inline.inside.italic.inside=n,e.languages.textile.phrase.inside.inline.inside.inserted.inside=n,e.languages.textile.phrase.inside.inline.inside.deleted.inside=n,e.languages.textile.phrase.inside.inline.inside.span.inside=n,e.languages.textile.phrase.inside.table.inside.inline=n.inline,e.languages.textile.phrase.inside.table.inside.link=n.link,e.languages.textile.phrase.inside.table.inside.image=n.image,e.languages.textile.phrase.inside.table.inside.footnote=n.footnote,e.languages.textile.phrase.inside.table.inside.acronym=n.acronym,e.languages.textile.phrase.inside.table.inside.mark=n.mark}(s),s.languages.url=s.languages.javascript,s.languages.blade=s.languages.php,s.languages.vue=s.languages.markup,s.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*[:\-,[{\r\n?][ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,lookbehind:!0,alias:"number"},boolean:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},null:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,lookbehind:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},function(e){var t={variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[\w#?*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,inside:t}],variable:t.variable,function:{pattern:/(^|[\s;|&])(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|[\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,lookbehind:!0},boolean:{pattern:/(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a.function=e.languages.bash.function,a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation}(s),function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:!0,inside:a}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var n=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,r=0;r<n.length;r++)i[n[r]]=e.languages.bash[n[r]];e.languages.shell=e.languages.bash}(s);var o={css:"CSS",javascript:"JavaScript",php:"PHP","php-extras":"PHP",blade:"Blade",statamic:"Template",output:"Output",yaml:"YAML",bash:"Command Line",env:".env",url:"URL"};s.hooks.add("before-highlight",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)){var a=o[e.language]||e.language.substring(0,1).toUpperCase()+e.language.substring(1);t.setAttribute("data-language",a);var n,i,r=t.previousSibling;r&&/\s*\bprism-show-language\b\s*/.test(r.className)&&r.firstChild&&/\s*\bprism-show-language-label\b\s*/.test(r.firstChild.className)?(i=r.firstChild).getAttribute("data-language")!==a&&(i.setAttribute("data-language",a),i.innerHTML=a):(n=document.createElement("div"),(i=document.createElement("div")).className="prism-show-language-label",i.setAttribute("data-language",a),i.innerHTML=a,n.className="prism-show-language",n.appendChild(i),t.parentNode.insertBefore(n,t))}})),s.languages.antlers=s.languages.extend("markup",{comment:[/\{\{#[\w\W]*?#\}\}/g,/\/\/\s.*/g],"statamic-tag":{pattern:/\{\{[^]*?\}\}/gm,inside:{"attr-value":{pattern:/=\s*"(\w+|\s+|\/)+"/,inside:{punctuation:/=|&gt;|"/g}},punctuation:/\{\{\s?\/?|\}\}/,operator:/\s\|\s/,"plugin-name":{pattern:/^\s*\w+:\w+/,inside:{class:/\w+(?=:)/,colon:/:/,method:/\w+$/}},"tag-name":/^\w+/,keyword:/\b(if|else|elseif|endif|unless)/g,"attr-name":/\w+/}},other:{pattern:/[\s\S]*/,inside:s.languages.markup}}),s.languages.files={"files-part":{pattern:/(^|\n).+/,inside:{"entry-line":[{pattern:/\|-- |├── /,alias:"line-h"},{pattern:/\|   |│   /,alias:"line-v"},{pattern:/`-- |└── /,alias:"line-v-last"},{pattern:/ {4}/,alias:"line-v-gap"}],"entry-name":{pattern:/.*\S.*/,inside:{operator:/ -> /}}}}},s.hooks.add("wrap",(function(e){if("files"===e.language&&"entry-name"===e.type){if(/(^|[^\\])\/\s*$/.test(e.content))e.classes.push("dir");else{/(^|[^\\])[=*|]\s*$/.test(e.content)&&(e.content=e.content.slice(0,-1));for(var t=e.content.toLowerCase().split(".");t.length>1;)t.shift(),e.classes.push("ext-"+t.join("-"))}"."===e.content.charAt(0)&&e.classes.push("dotfile")}})),s.languages.env={"attr-name":/.+?(?==)/gm,punctuation:/=/}},464:(e,t,a)=>{a(670)},224:()=>{}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,i,r)=>{if(!a){var s=1/0;for(d=0;d<e.length;d++){for(var[a,i,r]=e[d],o=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((e=>n.O[e](a[l])))?a.splice(l--,1):(o=!1,r<s&&(s=r));if(o){e.splice(d--,1);var p=i();void 0!==p&&(t=p)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={752:0,146:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[s,o,l]=a,p=0;for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var d=l(n);for(t&&t(a);p<s.length;p++)r=s[p],n.o(e,r)&&e[r]&&e[r][0](),e[s[p]]=0;return n.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),n.O(void 0,[146],(()=>n(464)));var i=n.O(void 0,[146],(()=>n(224)));i=n.O(i)})();