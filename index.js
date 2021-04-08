parent page:
<iframe onLoad={() => { window.iframeResizer(); }} id="subscriptionsFrame" height="300" width="100%" title="Subscriptions" frameBorder="0" src="http://localhost:8001/#/subscriptions/list" />


<script>
    function iframeResizer() {
      console.log('into the resizer');
      var iframe = document.getElementById('subscriptionsFrame').contentWindow;
      iframe.postMessage('message', '*');
      window.addEventListener('message', function (e) {
        console.log("Received from child window", e.data)
        // $('#subscriptionsFrame').css({ 'height': e.data })
        document.getElementById('subscriptionsFrame').height = e.data;
      });
    }
  </script>

Child page = <script>
    function reSize() {
      console.log("Child window loaded");
      receiveMessage();
			// A function to process messages received by the window.
			function receiveMessage() {
				parent.postMessage(document.body.scrollHeight, "*");
			}
		}
  </script>
