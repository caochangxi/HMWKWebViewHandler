#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "HMWKWebView.h"
#import "HMWKWebViewHandler.h"

FOUNDATION_EXPORT double HMWKWebViewHandlerVersionNumber;
FOUNDATION_EXPORT const unsigned char HMWKWebViewHandlerVersionString[];
