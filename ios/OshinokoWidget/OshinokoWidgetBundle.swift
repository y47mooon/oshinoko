//
//  OshinokoWidgetBundle.swift
//  OshinokoWidget
//
//  Created by ゆぅ on 2025/02/20.
//

import WidgetKit
import SwiftUI

@main
struct OshinokoWidgetBundle: WidgetBundle {
    var body: some Widget {
        OshinokoWidget()
        // LiveActivityを一時的にコメントアウト
        // if #available(iOSApplicationExtension 16.1, *) {
        //     OshinokoWidgetLiveActivity()
        // }
    }
}
