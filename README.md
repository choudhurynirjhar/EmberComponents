EmberComponents
===============

FileUpload component usage:

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
