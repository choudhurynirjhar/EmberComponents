EmberComponents
===============

FileUpload component usage:

If a file upload dialog feature is needed with a better looking UI with bootstrap style, you can use the FileUpload component. You will need the following code in your hbs file: 

<div class="panel-body">
  <div class="fileinputs">
    {{view App.FileUpload class='hiddel-file' file=file fileName=fileSelected size="22"}}
      <div class="fakefile form-inline">
        {{input type="text" class="form-control" value=fileSelected placeholder="Select File"}}
        <button type="button" {{bind-attr class=":btn :btn-success :form-control"}} title="Browse">Browse</button>
      </div>
    </div>
  </div>
</div>

CSS class: 
.hiddel-file {
       position: relative;
       text-align: right;
       -moz-opacity:0 ;
       filter:alpha(opacity: 0);
       opacity: 0;
       z-index: 2;
}
