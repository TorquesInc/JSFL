/**
 * Set all images in the library as lossless.
 * @author  Torques Inc.
 * @version 1.0
 */

fl.outputPanel.clear();
fl.trace( "== TORQUES-SetAllLibImagesToLossless.jsfl ==" );

var items    = fl.getDocumentDOM().library.items;
var numItems = items.length;

for( var i=0; i<numItems; i++ ){
  var item = items[i];
  
  if( item.itemType == 'bitmap' ){
    fl.trace( ">"+item.name );
    
	item.allowSmoothing = false;
    
	item.compressionType ="lossless"; // "lossless","photo"
  }
}
