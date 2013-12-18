/**
 * Check all items in the library.
 * @author  Torques Inc.
 * @version 1.0
 */

fl.outputPanel.clear();
fl.trace( "== TORQUES-CheckAllLib.jsfl ==" );

var items    = fl.getDocumentDOM().library.items;
var numItems = items.length;

for( var i=0; i<numItems; i++ ){
  var item = items[i];
  
  fl.trace( ">"+item.name );
 if( item.linkageExportForAS ){
	 var identifier = item.linkageIdentifier;
	 var classname = item.linkageClassName;
	 var baseclass = item.linkageBaseClass;
		  fl.trace("  \""+identifier+"\"" );
		  fl.trace("  \""+classname+"\"" );
		  fl.trace("  \""+baseclass+"\"" );
	  }
}
