exports.javascript=function(r,n,e){var a=r.ownerDocument,i=a&&a.parentWindow;if(i)try{i.run(n,e)}catch(o){r.raise("error","Running "+e+" failed.",{error:o,filename:e})}};