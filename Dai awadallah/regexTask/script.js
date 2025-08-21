
  // Regex rules
  const USER_RE = /^[A-Za-z][A-Za-z0-9_]{2,19}$/;
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const P_LEN = /.{8,}/;
  const P_LOWER = /[a-z]/;
  const P_UPPER = /[A-Z]/;
  const P_DIGIT = /\d/;
  const P_SPECIAL = /[^\w\s]/;
  const P_SPACE = /\s/;

  function setRule(list, key, ok){
    const item = list.querySelector(`[data-rule="${key}"]`);
    if(item){item.classList.toggle('ok', ok); item.classList.toggle('bad', !ok);}
  }

  // Username
  const username = document.getElementById('username');
  username.addEventListener('input', ()=>{
    const v = username.value.trim();
    setRule(userRules,'start', /^[A-Za-z]/.test(v));
    setRule(userRules,'charset', /^[A-Za-z0-9_]*$/.test(v));
    setRule(userRules,'length', v.length>=3 && v.length<=20);
  });

  // Password
  const password = document.getElementById('password');
  password.addEventListener('input', ()=>{
    const v = password.value;
    setRule(passRules,'len', P_LEN.test(v));
    setRule(passRules,'lower', P_LOWER.test(v));
    setRule(passRules,'upper', P_UPPER.test(v));
    setRule(passRules,'digit', P_DIGIT.test(v));
    setRule(passRules,'special', P_SPECIAL.test(v));
    setRule(passRules,'space', !P_SPACE.test(v));
    validateConfirm();
  });

  // Confirm password
  const confirm = document.getElementById('confirm');
  const confirmHint = document.getElementById('confirmHint');
  function validateConfirm(){
    const ok = password.value.length>0 && password.value===confirm.value;
    confirmHint.textContent = ok ? 'كلمة المرور متطابقة' : 'يجب أن تتطابق مع كلمة المرور';
    confirmHint.className = ok ? 'rule ok' : 'rule bad';
    return ok;
  }
  confirm.addEventListener('input', validateConfirm);

  // Email check
  const email = document.getElementById('email');

  // Submit
  const submitBtn = document.getElementById('submitBtn');
  const formMsg = document.getElementById('formMsg');

  document.body.addEventListener('input', ()=>{
    const ok = USER_RE.test(username.value.trim()) && EMAIL_RE.test(email.value.trim()) &&
              P_LEN.test(password.value) && P_LOWER.test(password.value) && P_UPPER.test(password.value) &&
              P_DIGIT.test(password.value) && P_SPECIAL.test(password.value) && !P_SPACE.test(password.value) &&
              password.value===confirm.value;
    submitBtn.disabled = !ok;
  });

  submitBtn.addEventListener('click', ()=>{
    formMsg.textContent = `تم إنشاء الحساب بنجاح للمستخدم: ${username.value}`;
  });
