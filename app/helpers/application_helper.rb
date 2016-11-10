module ApplicationHelper
  def inventory_link(user)
    if user
      html = <<-HTML
        <li class="nav-item">
          <a class="nav-link" ui-sref="inventory">Inventory</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ui-sref="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ui-sref="contact">Contact</a>
        </li>
      HTML

      html.html_safe
    end
  end
end
