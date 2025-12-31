//Searchbox
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearButton');

  function toggleClearButton() {
    clearBtn.classList.toggle('hidden', input.value.length === 0);
  }

  function clearSearch() {
    input.value = '';
    toggleClearButton();
    input.focus();
  }


//buttons  selection  Blue underline
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        // Reset all
        t.classList.remove("text-white");
        t.classList.add("text-gray-400");
        t.querySelector(".underline").classList.add("hidden");
      });

      // Activate clicked tab
      tab.classList.remove("text-gray-400");
      tab.classList.add("text-white");
      tab.querySelector(".underline").classList.remove("hidden");
    });
  });

  // Optional: Set "For you" as default active
  document.getElementById("tab-for-you").click();






