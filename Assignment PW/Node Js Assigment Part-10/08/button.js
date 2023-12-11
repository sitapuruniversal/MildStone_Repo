  
  // Creating a custom event named "subscribe"
  const subscribeEvent = new Event('subscribe');

  // Function to handle the subscription event
  function handleSubscription() {
    console.log('User has subscribed!');
    // Update the button text to indicate subscription
    const subscribeButton = document.getElementById('subscribeButton');
    subscribeButton.textContent = 'Subscribed!';
    subscribeButton.disabled = true; // Disable the button after subscribing
    // Here, you can add further logic for subscription-related actions
  }

  // Function to trigger the subscription event
  function subscribe() {
    // Dispatching the custom event
    document.dispatchEvent(subscribeEvent);
  }

  // Adding an event listener to the document to listen for the custom "subscribe" event
  document.addEventListener('subscribe', handleSubscription);

  // Adding a click event listener to the subscribe button to trigger the subscription event
  const subscribeButton = document.getElementById('subscribeButton');
  subscribeButton.addEventListener('click', subscribe);

