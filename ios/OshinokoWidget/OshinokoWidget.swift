//
//  OshinokoWidget.swift
//  OshinokoWidget
//
//  Created by ゆぅ on 2025/02/20.
//

import WidgetKit
import SwiftUI

struct SimpleEntry: TimelineEntry {
    let date: Date
    let title: String
    let progress: Double
    let status: String
}

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        let data = SharedDefaults.shared.getWidgetData()
        return SimpleEntry(date: Date(), title: data.title, progress: data.progress, status: data.status)
    }

    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let data = SharedDefaults.shared.getWidgetData()
        let entry = SimpleEntry(date: Date(), title: data.title, progress: data.progress, status: data.status)
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<SimpleEntry>) -> ()) {
        let data = SharedDefaults.shared.getWidgetData()
        let entry = SimpleEntry(date: Date(), title: data.title, progress: data.progress, status: data.status)
        let nextUpdate = Calendar.current.date(byAdding: .minute, value: 5, to: Date())!
        let timeline = Timeline(entries: [entry], policy: .after(nextUpdate))
        completion(timeline)
    }
}

struct OshinokoWidgetEntryView : View {
    var entry: Provider.Entry
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(entry.title)
                .font(.headline)
            ProgressView(value: entry.progress)
            Text(entry.status)
                .font(.caption)
        }
        .padding()
    }
}

struct OshinokoWidget: Widget {
    let kind: String = "OshinokoWidget"
    
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            OshinokoWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("おしのこウィジェット")
        .description("おしのこの進捗状況を表示します")
        .supportedFamilies(supportedFamilies)
    }
    
    private var supportedFamilies: [WidgetFamily] {
        if #available(iOSApplicationExtension 16.0, *) {
            return [
                .systemSmall,
                .systemMedium,
                .accessoryCircular,
                .accessoryRectangular
            ]
        } else {
            return [
                .systemSmall,
                .systemMedium
            ]
        }
    }
}
