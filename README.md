EmberComponents
===============

<b>FileUpload component usage:</B>

If a file upload dialog feature is needed with a better looking UI with bootstrap style, you can use the FileUpload component. You will need the following code in your hbs file: 

&lt;div class="panel-body"&gt;    
   &lt;div class="fileinputs"&gt;                                                                                              
      {{view App.FileUpload class='hiddel-file' file=file fileName=fileSelected size="22"}}                                     
      &lt;div class="fakefile form-inline"&gt;                                                                                  
        {{input type="text" class="form-control" value=fileSelected placeholder="Select File"}}                                   
         &lt;button type="button" {{bind-attr class=":btn :btn-success :form-control"}} title="Browse"&gt;Browse&lt;/button&gt;  
      &lt;/div&gt;                                                                                                                
   &lt;/div&gt;                                                                                                                  
&lt;/div&gt;                                                                                                                    


CSS class:                                                                                                                       
.hiddel-file {
       position: relative;
       text-align: right;
       -moz-opacity:0 ;
       filter:alpha(opacity: 0);
       opacity: 0;
       z-index: 2;
}                                                                                                                             
div.fileinputs {
       position: relative;
}                                                                                                                             
div.fakefile {
       position: absolute;
       top: 0px;
       left: 0px;
       z-index: 1;
}

<b>NumberField component usage:</b>

If you need a textbox that only allows number field with optional min and max range, you should use the NumberField component. You will need the below code to be put into your hbs file:

{{view App.NumberField value=itemValue class="form-control"  min="1.0" max="100.0" size="30"}}                                

<b>KeyDownView component usage:</b>

If you need to capture down arrow key and move cursur from one textbox to another in the vertical direction inside of a html table, you should be using this component. All you need is to wrap the html table where you need this feature with this component.                                                                                                                      
{{#view App.KeyDownView}} {{/view}}

<b>TypeAheadComponent component usage:</b>

This component is used to show typeahead text using bootstrap typeahead component. You will need the following code inside your hbs file:

{{type-ahead items=itemsToBeBound matchProperty='propertyToBeMatchedFromJsonObjectArray' selectedValue=valueSelectedOnClick selectedItem=objectAssociatedToTheSelectedValue}}

<b>DirtyTextField component usage:</b>

If you need a textfield which shows text color as res on change by user you should use this component. The following code should be added to the hbs file.

{{view App.TextField value=item class="form-control" size="30"}}

CSS Class:                                                                                                                    
.text-dirty{
 color:red;
}

<b>DownloadView component usage:</b>

If you need to download stream sent from server (e.g., excel file streamed from ASP.Net Web API), you will need this view in ember. All you need is to have a downloadUrl and id property in controller. The url is the server base url from where a specific resolure will be downloaded. And the id is the unique id of the resource to be downloaded. The id  will be set by controller when data needs to be downloaded. Code for hbs file (this code can be anywhere in the hbs file):

{{#view App.DownloadView}}{{/view}}
