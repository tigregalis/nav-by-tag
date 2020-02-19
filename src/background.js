// generic error handler
// pass in a context string
// returns a function you can call an error on
const errorHandler = (context) => (error) =>  {
  console.error(`An error occurred when executing ${context}:`, error);
}

const getAllBookmarks = async () => {
  const onRejected = errorHandler('getAllBookmarks');
  try {
    const bookmarks = await browser.bookmarks.search({});
    return bookmarks;
  } catch (error) {
    onRejected(error);
  }
}

const getAllTags = async () => {
  const tags = browser.storage.local.get('tags');
  return tags;
}

const getAllUrlsForTag = async (tag) => {
  // TODO
}

const addTagToUrl = async (url) => {
  // TODO
}

const removeTagFromUrl = async (url) => {
  // TODO
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Hello from the background');
  console.log({request, sender, sendResponse});
})

// in theory this runs only once
const start = async () => {
  const bookmarks = await getAllBookmarks();
  console.log({ bookmarks });
}
start();