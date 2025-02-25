import Foundation
import WidgetKit

@objc(WidgetModule)
class WidgetModule: NSObject {
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc(updateWidget:progress:status:)
    func updateWidget(_ title: String, progress: Double, status: String) {
        // SharedDefaultsを使用してデータを保存
        SharedDefaults.shared.saveWidgetData(
            title: title,
            progress: progress,
            status: status
        )
        
        // ウィジェットの更新をトリガー
        WidgetCenter.shared.reloadAllTimelines()
    }
} 