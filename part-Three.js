let toc = document.getElementById('toc');

let tocHeader = document.getElementById("tocHeader");

let tocList = document.createElement("ul");

let headers = document.getElementsByTagName("h3");

let headersTwo = document.getElementsByTagName("h2");
for (i = 0; i < headers.length; i++){
    let name = "h"+ i;
     headers[i].id = name;
    let tocListItem = document.createElement("li");
    let tocEntry = document.createElement("a");
      tocEntry.setAttribute("href","#" + name);
      tocEntry.innerText=headers[i].innerText;
      tocListItem.appendChild(tocEntry);
      tocList.appendChild(tocListItem);
}
    toc.appendChild(tocList); 