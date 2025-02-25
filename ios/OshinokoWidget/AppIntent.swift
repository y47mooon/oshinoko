//
//  AppIntent.swift
//  OshinokoWidget
//
//  Created by ゆぅ on 2025/02/20.
//

import WidgetKit
import AppIntents

struct ConfigurationAppIntent: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Configuration"
    static var description: IntentDescription = IntentDescription("This is an example widget.")

    func perform() async throws -> some IntentResult {
        return .result()
    }

    @Parameter(title: "Favorite Emoji", default: "😃")
    var favoriteEmoji: String
}
