App.FileUpload = Ember.TextField.extend({
        type: 'file',
        attributeBindings: ['class', 'name'],
        file: null,
        fileName: null,

        change: function(evt) {
            var input = evt.target;
            if (input.files && input.files[0]) {
                this.set('file', input.files[0]);
                this.set('fileName', input.files[0].name);
            }
        }
    });
