window.addEventListener("load",(function(){var a=AsanaI18n.getCurrentPageLanguage(),e=document.querySelector('input[name="Case_Language__c"]');(e&&(e.value=a),null!==AsanaHelpers.getParameterByName("goals"))&&(document.querySelector('input[name="Referral_Page__c"]').value="Goals Page");var n=document.querySelector(".salesForm-emailInput");n.addEventListener("input",(function(){var e=AsanaEmail.validate(n.value),t=AsanaEmail.isPersonalEmail(n.value);e?t?n.setCustomValidity(AsanaI18n.translations.emailPersonalFail[a]):n.setCustomValidity(""):n.setCustomValidity(AsanaI18n.translations.emailRegexFail[a])}))}));var recaptchaSuccessCallback=function(){document.querySelector(".salesFormSubmit").disabled=!1};