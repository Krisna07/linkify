export default function FocusItems({ elementRef, actionHide }: any) {
  window.addEventListener("click", (e) => {
    const ClickedItem = e.target;
    const openItem = elementRef;
    if (ClickedItem == openItem) {
      console.log("clicked");
    } else {
      console.log("not clicked");
    }
  });
}
