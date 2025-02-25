//
//  OshinokoWidgetLiveActivity.swift
//  OshinokoWidget
//
//  Created by ゆぅ on 2025/02/20.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct OshinokoWidgetAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

@available(iOSApplicationExtension 16.1, *)
struct OshinokoWidgetLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: OshinokoWidgetAttributes.self) { context in
            // Lock screen/banner UI goes here
            VStack {
                Text("Hello \(context.state.emoji)")
            }
            .activityBackgroundTint(Color.cyan)
            .activitySystemActionForegroundColor(Color.black)

        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI goes here.  Compose the expanded UI through
                // various regions, like leading/trailing/center/bottom
                DynamicIslandExpandedRegion(.leading) {
                    Text("Leading")
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("Trailing")
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Bottom \(context.state.emoji)")
                    // more content
                }
            } compactLeading: {
                Text("L")
            } compactTrailing: {
                Text("T \(context.state.emoji)")
            } minimal: {
                Text(context.state.emoji)
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

extension OshinokoWidgetAttributes {
    fileprivate static var preview: OshinokoWidgetAttributes {
        OshinokoWidgetAttributes(name: "World")
    }
}

extension OshinokoWidgetAttributes.ContentState {
    fileprivate static var smiley: OshinokoWidgetAttributes.ContentState {
        OshinokoWidgetAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: OshinokoWidgetAttributes.ContentState {
         OshinokoWidgetAttributes.ContentState(emoji: "🤩")
     }
}
