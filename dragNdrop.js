(function() {
  dndHandler = {
    draggablElement: null,

    applyDragEvent: function(element) {
      element.draggable = true;
      draggablElement = this;
      element.addEventListener("dragstart", function(e) {
        e.preventDefault;
        draggablElement = e.target;
      });
    },

    applyDropEvent: function(droper) {
      droper.addEventListener(
        "dragover",
        function(e) {
          e.preventDefault();
          droper.className = "";
        },
        false
      );

      droper.addEventListener(
        "draleave",
        function(e) {
          e.preventDefault();
          droper.className = "";
        },
        false
      );

      droper.addEventListener(
        "drop",
        function(e) {
          e.preventDefault();
          let clonElement = dndHandler.draggablElement.cloneNode(true);
          let dropeZone = e.target;
          dropeZone.appendChild(clonElement);
          dndHandler.draggablElement
            .parentNode()
            .removeChild(dndHandler.draggablElement);
          dndHandler.applyDragEvent(clonElement);
        },
        false
      );
    }
  };
})();
