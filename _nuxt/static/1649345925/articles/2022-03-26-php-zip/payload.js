__NUXT_JSONP__("/articles/2022-03-26-php-zip", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak){return {data:[{postData:{slug:"2022-03-26-php-zip",title:"PHP 產生壓縮檔",summary:"在某些需求，如要讓使用者下載多個檔案時，我們可以打包成一個檔案供用戶下載，或是檔案太大，可以壓縮檔案已減少頻寛。",image:"\u002Fimages\u002Farticles\u002F2022-03-26-php-zip\u002Fcover.png",status:true,category:{slug:"pragram",title:"程式設計",type:"class",src:"\u002Fimages\u002Fslider\u002Fprogram.png",sort:1,toc:[],body:{type:C,children:[{type:b,tag:i,props:{},children:[{type:a,value:"分享各種程式設計的小技巧"}]}]},dir:"\u002Fcategories",path:"\u002Fcategories\u002Fpragram",extension:D,createdAt:"2022-03-30T12:28:46.804Z",updatedAt:"2022-03-30T12:28:46.806Z"},tags:[{slug:E,title:E,toc:[],body:{type:C,children:[]},dir:"\u002Ftags",path:"\u002Ftags\u002Fphp",extension:D,createdAt:N,updatedAt:N}],toc:[{id:O,depth:F,text:P},{id:Q,depth:F,text:R},{id:S,depth:F,text:T}],body:{type:C,children:[{type:b,tag:G,props:{id:O},children:[{type:b,tag:H,props:{ariaHidden:I,href:"#%E9%9C%80%E6%B1%82",tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:P}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"php5.2 以上版本"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"安裝 zip 庫"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"以 "},{type:b,tag:g,props:{},children:[{type:a,value:"Ubuntu"}]},{type:a,value:" 為例："}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,"language-bash"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:U}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:V}]},{type:a,value:" update\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:U}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:V}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"install"}]},{type:a,value:" -y php7.4-zip\n"}]}]}]},{type:a,value:e},{type:b,tag:G,props:{id:Q},children:[{type:b,tag:H,props:{ariaHidden:I,href:"#%E5%A3%93%E7%B8%AE%E7%AF%84%E4%BE%8B%E7%A8%8B%E5%BC%8F",tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"產生壓縮檔"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,E,x]},children:[{type:b,tag:c,props:{className:[d,"delimiter","important"]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002Fnew ZipArchive 物件"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:W}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,"string","single-quoted-string"]},children:[{type:a,value:"'new.zip'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,"scope"]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"::"}]}]},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:"CREATE"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:_}]}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"其中 "},{type:b,tag:g,props:{},children:[{type:a,value:"$zip-\u003Eopen()"}]},{type:a,value:" 第一參數為要產壓縮檔路徑"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"第二參數為產生檔案的模式"}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ZipArchive::CREATE"}]},{type:a,value:"：產生新檔案"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"ZipArchive::OVERWRITE"}]},{type:a,value:": 若壓縮檔存在，則覆蓋檔案"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"加入一個空資料夾"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"addEmptyDir"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aa}]},{type:a,value:" 資料夾名稱"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"將檔案加入壓縮檔"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"addaddFile"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:B}]},{type:a,value:" 為檔案路徑"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ab}]},{type:a,value:" 重新命名 (選填)"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"將字串加入文字檔並壓縮"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"addFromString"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" 檔案名稱"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:" 文字內容"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"依索引刪除檔案"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"deleteIndex"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ae}]},{type:a,value:" 刪除索引的檔案"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"依檔名刪除檔案"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"deleteName"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:af}]},{type:a,value:" 刪除檔案名稱"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"更改檔名"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"renameName"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ag}]},{type:a,value:" 原本檔名"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:" 新檔名"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"關閉壓縮檔"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:G,props:{id:S},children:[{type:b,tag:H,props:{ariaHidden:I,href:"#%E8%A7%A3%E5%A3%93%E7%B8%AE%E7%A8%8B%E5%BC%8F",tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:T}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"範例程式"}]}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,x]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:W}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"extractTo"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:z}]}]},{type:a,value:e},{type:b,tag:y,props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aj}]},{type:a,value:" 壓縮檔位置"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:B}]},{type:a,value:" 解壓縮檔路徑"}]},{type:a,value:e}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2022-03-26-php-zip",extension:D,createdAt:"2022-03-31T02:09:56.217Z",updatedAt:"2022-04-05T03:23:07.142Z"},perv:ak,next:ak}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation","code","variable","p","function","li"," ","$zip","operator",";","-\u003E","(",")","div","nuxt-content-highlight","pre","line-numbers","strong","language-php","ol","參數說明",",","$filePath","root",".md","php",2,"h2","a","true",-1,"icon","icon-link","ZipArchive","2022-02-24T15:44:26.553Z","e6cefb85dc60e5c9c0d7d804f85f6572","需求","e251a2c33f23dee6ff437af1ed3d3325","壓縮範例程式","5a3643485e77979c4ff3e61ceafae929","解壓縮程式","sudo","apt","=","keyword","new","class-name","\n\n","open","$dirname","$newFileName","$filename","$content","$index","$name","$oldName","$newName","close","$zipFile",null)));