/**
 * Update all images in the library.
 * @author  Torques Inc.
 * @version 1.0
 */

fl.trace( "== TORQUES-UpdateImages.jsfl ==" );

fl.outputPanel.clear();

var items    = fl.getDocumentDOM().library.items;
var numItems = items.length;

for( var i=0; i<numItems; i++ ){
	var item = items[i];
	if( item.itemType == "bitmap" ){
		fl.trace( "Update-Bitmap    ["+item.name+"]" );
		fl.getDocumentDOM().library.updateItem( item.name );
	}
}
