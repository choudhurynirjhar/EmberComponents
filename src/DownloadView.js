App.DownloadView = Ember.View.extend({
    downloadFile: function () {
        if (this.get('controller.id')) {
            var hiddenIFrameId = 'hiddenDownloader';
            var iframe = document.getElementById(hiddenIFrameId);
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = hiddenIFrameId;
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }

            iframe.src = this.get('controller.downloadUrl') + this.get('controller.id');
            this.set('controller.id', null);
        }
    }.observes('controller.id')
});