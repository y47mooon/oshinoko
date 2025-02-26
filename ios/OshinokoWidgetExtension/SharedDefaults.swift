//
//  SharedDefaults.swift
//  OshinokoWidgetExtension
//
//  Created by ゆぅ on 2025/02/25.
//

import Foundation
import WidgetKit

class SharedDefaults {
    static let shared = SharedDefaults()
    let userDefaults: UserDefaults?
    
    private init() {
        userDefaults = UserDefaults(suiteName: "group.jp.gaudy.oshinoko.WidgetApp")
    }
    
    func saveWidgetData(title: String, progress: Double, status: String) {
        userDefaults?.set(title, forKey: "widgetTitle")
        userDefaults?.set(progress, forKey: "widgetProgress")
        userDefaults?.set(status, forKey: "widgetStatus")
        userDefaults?.set(Date(), forKey: "widgetLastUpdate")
        
        // ウィジェットの更新をトリガー
        WidgetCenter.shared.reloadAllTimelines()
    }
    
    func getWidgetData() -> (title: String, progress: Double, status: String, lastUpdate: Date) {
        let title = userDefaults?.string(forKey: "widgetTitle") ?? "おしのこ"
        let progress = userDefaults?.double(forKey: "widgetProgress") ?? 0.0
        let status = userDefaults?.string(forKey: "widgetStatus") ?? "更新中..."
        let lastUpdate = userDefaults?.object(forKey: "widgetLastUpdate") as? Date ?? Date()
        
        return (title, progress, status, lastUpdate)
    }
} 