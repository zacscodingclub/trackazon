module ProductsHelper
  def display_inventory(inventory)
    html = ""

    if inventory.empty?
      html += "<p>To get started, add your item's information below and click 'Add Product'.</p>"
    else
      html += <<-HTML
        <table class="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Purchase Price</th>
              <th>Selling Price</th>
              <th>Quantity Purchased</th>
              <th>Quantity Sold</th>
              <th>Profit</th>
            </tr>
          </thead>
        <tbody>
      HTML

      inventory.each do |item|
        html += <<-HTML
          <tr>
            <th>#{item.name}</th>
            <th>#{item.item_price}</th>
            <th>#{item.sell_price}</th>
            <th>#{item.quantity}</th>
            <th>#{item.quantity_sold}</th>
            <th>Angular Binding to calculate profit</th>
          </tr>
        HTML
      end

      html += "</tbody></table>"
    end

    html.html_safe
  end
end
