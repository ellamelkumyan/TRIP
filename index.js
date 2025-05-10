$(document).ready(function() {
	$('.header__filter-select').select2({
	  language: "ru",
	  placeholder: "Куда едем?",
	  width: '168px',
	  allowClear: true,
	  matcher: function(params, data) {
		if ($.trim(params.term) === '') return data;
		if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) === 0) {
		  return data;
		}
		return null;
	  }
	});
  });

  document.querySelectorAll('.counter-btn').forEach(btn => {
	btn.addEventListener('click', function() {
	  const type = this.dataset.type;
	  const counter = document.querySelector(`.counter-value[data-type="${type}"]`);
	  let value = parseInt(counter.textContent);
	  
	  if (this.classList.contains('plus')) {
		value++;
	  } else {
		value = Math.max(0, value - 1);
	  }
	  
	  counter.textContent = value;
	});
  });