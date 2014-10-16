App.NumberField = App.TextField.extend({
        type: 'text',
        attributeBindings: ['min', 'max', 'step'],
        onlyNumber: function(input) {
            return input.toString().replace(/[^\d.]/g, "");
        },

        check: function() {
            var value = this.get('value');
            if (isNaN(value)) {
                this.set('value', this.onlyNumber(value));
            }
        }.observes('value')
    });