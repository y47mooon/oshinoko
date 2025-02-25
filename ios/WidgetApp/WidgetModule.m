#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(WidgetModule, NSObject)

RCT_EXTERN_METHOD(updateWidget:(NSString *)title
                  progress:(double)progress
                  status:(NSString *)status)

@end 