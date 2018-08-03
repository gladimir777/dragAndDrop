(function() {
  //alert("test");
  dndHandler = {
    draggablElement: null,

    applyDragEvent: function(element) {
      element.draggable = true;
      dhandlerContext = this;
      element.addEventListener(
        "dragstart",
        function(e) {
          e.preventDefault;
          dhandlerContext.draggablElement = e.target;
        },
        false
      );
    },

    applyDropEvent: function(droper) {
      droper.addEventListener("dragover", function(e) {
        e.preventDefault();
        //this.className = "black";
      });

      droper.addEventListener("draleave", function(e) {
        e.preventDefault();
        droper.className = "black";
      });

      droper.addEventListener("drop", function(e) {
        e.preventDefault();
        //alert(e.target);
        let clonElement = dndHandler.draggablElement.cloneNode(true);
        console.log(clonElement.classList);
        let classArray = clonElement.classList;
        if (classArray.contains("blue")) {
          clonElement.classList.remove("blue");
        } else {
          clonElement.classList.add("blue");
        }

        let dropeZone = e.target;
        dropeZone.appendChild(clonElement);
        dndHandler.draggablElement.parentNode.removeChild(
          dndHandler.draggablElement
        );
        dndHandler.applyDragEvent(clonElement);
      });
    }
  };
  const drager = document.querySelectorAll(".drager");
  const droper = document.querySelectorAll(".droper");
  console.log(droper.length);

  for (let i = 0; i < drager.length; i++) {
    dndHandler.applyDragEvent(drager[i]);
  }

  for (let i = 0; i < droper.length; i++) {
    dndHandler.applyDropEvent(droper[i]);
  }
})();
