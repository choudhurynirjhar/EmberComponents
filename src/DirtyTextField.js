App.DirtyTextField = Em.TextField.extend({
        originalValue: null,
        originalClass: null,
        currentId: 0,

        idChanged: function() {
            var element = this.get('element');
            if (element.className === this.get('originalClass') + ' text-dirty') {
                element.className = this.get('originalClass');
            }
        }.observes('currentId'),

        init: function() {
            this._super();
            this.set('originalValue', this.get('value'));
        },

        keyUp: function(element) {
            if (element.target.className.indexOf('text-dirty') < 0) {
                if (element.keyCode == 9
                    ||(element.keyCode >= 37 && element.keyCode <= 40)) { //37-40 is up/down/left/right key, 9 is tab, need to ignore them
                    return;
                }
                this.set('originalClass', element.target.className);
                element.target.className = element.target.className + ' text-dirty';
            } else {
                if (this.get('originalValue') === this.get('value')) {
                    element.target.className = this.get('originalClass');
                }
            }
        }
    });