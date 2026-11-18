.PHONY: check
check:
	@for f in *.user.js; do \
	  node --check "$$f" || exit 1; \
	  for key in name namespace version match downloadURL updateURL; do \
	    grep -Eq "^// @$$key +" "$$f" || { echo "$$f: missing @$$key"; exit 1; }; \
	  done; \
	  grep -q "raw.githubusercontent.com/mokagio/userscripts/main/$$f" "$$f" || { echo "$$f: update URL doesn't match file name"; exit 1; }; \
	  echo "$$f ok"; \
	done
