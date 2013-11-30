json.array!(@tasks) do |task|
  json.extract! task, :desc, :score
  json.url task_url(task, format: :json)
end