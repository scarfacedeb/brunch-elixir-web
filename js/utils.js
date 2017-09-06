export function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

export function delegated(selector, cb) {
  return (e) => {
    let delegateTarget;

    if (matches(e.target, selector)) {
      delegateTarget = e.target;
    } else {
      delegateTarget = e.target.closest(selector);
    }
    if (delegateTarget) {
      cb(e, delegateTarget);
    }
  };
}
