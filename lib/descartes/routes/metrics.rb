module Descartes
  class Web < Sinatra::Base

    get '/metrics/?' do
      haml :'metrics/list', :title => "Descartes - Metrics List"
    end

    get '/metrics/search/?' do
      if request.accept.include?("application/json")
        content_type "application/json"
        status 200
        Metric.find(params[:pattern]).to_json
      else
        # halt
      end
    end

  end
end