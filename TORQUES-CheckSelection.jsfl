/**
 * print the information for selection.
 * @author  Torques Inc.
 * @version 1.0
 */

fl.outputPanel.clear();
fl.trace( "== TORQUES-CheckSelection.jsfl ==" );

var selectionArray = fl.getDocumentDOM().selection;
var numSelection   = selectionArray.length;

for( var i=0; i<numSelection; i++ ){
  var element = selectionArray[i];
  
  fl.trace( ">"+element.name +" ("+element.elementType+")" );
  if( element.elementType == "instance" ){
	  var item = element.libraryItem;
    fl.trace(" ["+item.name+"("+item.itemType+")]");
	  if( item.linkageExportForAS ){
		  fl.trace("  \""+item.linkageBaseClass+"\"" );
		  fl.trace("  \""+item.linkageClassName+"\"" );
	  }
	  else{
	  }
  }
  fl.trace( "" );
}
